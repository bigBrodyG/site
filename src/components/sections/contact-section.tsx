
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }).max(500, {message: "Message must not exceed 500 characters."}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch('https://formcarry.com/s/DFhgJbQorGP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.code === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting me. I'll get back to you as soon as possible.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error Sending Message",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
        console.error("Formcarry submission error:", result);
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not send message. Please check your connection and try again.",
        variant: "destructive",
      });
      console.error("Fetch error:", error);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary flex items-center justify-center">
            <MessageSquare className="mr-3 h-8 w-8 text-accent" />
            Contact Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a question, a project idea, or just want to say hello? Feel free to write to me!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto rounded-2xl shadow-xl p-2 sm:p-4 bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-semibold text-primary">Send Me a Message</CardTitle>
            <CardDescription className="text-center text-muted-foreground">I'm always open to discussing new projects or opportunities.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="rounded-xl h-12 text-base focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="rounded-xl h-12 text-base focus:ring-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or request..."
                          className="rounded-xl min-h-[150px] text-base focus:ring-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full rounded-full text-lg py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  {!form.formState.isSubmitting && <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
