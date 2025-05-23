
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import ImageCarousel from '@/components/ui/image-carousel';
import type { CarouselImage } from '@/types';

const backgroundCarouselImages: CarouselImage[] = [
  { 
    src: '/background-images/tech-abstract-1.jpg', 
    alt: 'Abstract technology background with glowing lines', 
    hint: 'abstract technology' 
  },
  { 
    src: '/background-images/developer-workspace.jpg', 
    alt: 'Modern developer workspace with multiple monitors', 
    hint: 'developer workspace' 
  },
  { 
    src: '/background-images/futuristic-circuits.jpg', 
    alt: 'Futuristic circuit board patterns', 
    hint: 'futuristic circuits'
  },
  {
    src: '/background-images/coding-screen-close-up.jpg',
    alt: 'Close-up of a screen with lines of code',
    hint: 'coding screen'
  }
];

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative py-20 md:py-32 overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center justify-center"
    >
      <ImageCarousel images={backgroundCarouselImages} showButtons={true} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-8">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8UHJvamVjdHxlbnwwfHx8fDE3NDgwMTE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Giordano Fornari Profile Picture"
              width={120}
              height={120}
              data-ai-hint="profile person"
              className="rounded-full shadow-xl border-4 border-accent/80 bg-background/20 backdrop-blur-sm p-1 transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-white drop-shadow-lg">Hi, I'm </span>
            <span className="block text-primary animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-md">
              Giordano Fornari
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-sm">
            I'm a Computer Science student and technology enthusiast, with a strong interest in science and cybersecurity. Explore my journey and my projects.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#projects" passHref>
              <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group bg-primary hover:bg-primary/90 text-primary-foreground">
                My Projects
                <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </Link>
            <Link href="#contact" passHref>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-accent text-accent hover:bg-accent/20 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-black/30 hover:text-white backdrop-blur-sm">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
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
