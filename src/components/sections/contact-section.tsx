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
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido." }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri." }).max(500, {message: "Il messaggio non deve superare i 500 caratteri."}),
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
    // In a real app, you'd send this data to a backend or email service.
    // For this demo, we'll simulate a successful submission.
    console.log("Modulo di contatto inviato:", data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Messaggio Inviato!",
      description: "Grazie per avermi contattato. Ti risponderò al più presto.",
      variant: "default",
    });
    form.reset(); // Reset form after submission
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary flex items-center justify-center">
            <MessageSquare className="mr-3 h-8 w-8 text-accent" />
            Contattami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hai una domanda, un'idea per un progetto o vuoi semplicemente salutarmi? Non esitare a scrivermi!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto rounded-2xl shadow-xl p-2 sm:p-4 bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-semibold text-primary">Inviami un messaggio</CardTitle>
            <CardDescription className="text-center text-muted-foreground">Sono sempre aperto a discutere nuovi progetti o opportunità.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Il Tuo Nome" {...field} className="rounded-xl h-12 text-base focus:ring-accent" />
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
                      <FormLabel className="text-foreground">Indirizzo Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tua.email@esempio.com" {...field} className="rounded-xl h-12 text-base focus:ring-accent" />
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
                      <FormLabel className="text-foreground">Messaggio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Parlami del tuo progetto o della tua richiesta..."
                          className="rounded-xl min-h-[150px] text-base focus:ring-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full rounded-full text-lg py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
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
