
"use client";

import type { CarouselImage } from '@/types';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: CarouselImage[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  showButtons?: boolean;
}

export default function ImageCarousel({
  images,
  autoplay = true,
  autoplayInterval = 5000,
  className,
  showButtons = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    const interval = setInterval(() => {
      goToNext();
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, autoplayInterval, images.length, goToNext]); // Added goToNext to dependencies

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden -z-10", className)}>
      {/* Semi-transparent overlay for text contrast, part of the carousel background */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {images.map((image, index) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0",
            "-z-20" // Ensure image is behind the overlay
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
            data-ai-hint={image.hint}
            sizes="100vw"
          />
        </div>
      ))}
      
      {showButtons && images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </>
      )}
    </div>
  );
}
