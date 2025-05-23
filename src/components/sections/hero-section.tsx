
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent rounded-full filter blur-3xl opacity-40 animate-pulse-slower"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-8">
            <Image
              src="/io.png" 
              alt="Giordano Fornari Profile Picture"
              width={120}
              height={120}
              data-ai-hint="profile person"
              className="rounded-full shadow-xl border-4 border-accent/50 transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-foreground">Hi, I'm </span>
            <span className="block text-primary animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Giordano Fornari
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            I'm a Computer Science student and technology enthusiast, with a strong interest in science and cybersecurity. Explore my journey and my projects.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#projects" passHref>
              <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                My Projects
                <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </Link>
            <Link href="#contact" passHref>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s infinite ease-in-out;
        }
        .animate-pulse-slower {
          animation: pulse 6s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-text-gradient {
          animation: textGradient 5s linear infinite;
          background-size: 200% auto;
        }
        @keyframes textGradient {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}

