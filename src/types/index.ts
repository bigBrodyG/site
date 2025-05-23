
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  imageAiHint?: string;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  tags: string[];
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'work' | 'achievement';
  title: string;
  institution?: string; // For education or company for work
  date: string; // e.g., "2020 - Present" or "June 2023"
  description: string;
  icon?: React.ElementType; // Lucide icon component
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // Optional proficiency level (e.g., 1-5 or 1-100 for a progress bar)
  icon?: React.ElementType;
  description?: string; // Optional description for the skill
}

export interface CarouselImage {
  src: string;
  alt: string;
  hint: string; // For data-ai-hint
}
