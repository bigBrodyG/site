import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Embedded Systems: Arduino & ESP32',
    description: "Exploration and development with Arduino and ESP32 microcontrollers, delving into hardware-software interaction.",
    longDescription: "From 2020 to 2024, I dedicated time to learning and experimenting with embedded systems, using platforms like Arduino and ESP32 to create small projects and understand microcontroller functionality.",
    image: 'https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhcmR1aW5vfGVufDB8fHx8MTc0ODAwOTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAiHint: 'microcontroller circuit',
    tags: ['Arduino', 'ESP32', 'Microcontrollers', 'C/C++', 'Electronics'],
  },
  {
    id: '2',
    title: 'Cybersecurity Journey & OliCyber',
    description: 'Deepening my knowledge of cybersecurity and participating in the OliCyber competition, preparing for future challenges.',
    longDescription: "Starting in 2024, cybersecurity became my main interest. I participated in OliCyber, placing 69th nationally and reaching the finals (75th). I am currently preparing for CyberChallenge.IT.",
    image: 'https://images.unsplash.com/photo-1533709752211-118fcaf03312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8Q3liZXJ8ZW58MHx8fHwxNzQ3OTM0Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAiHint: 'cyber security',
    tags: ['Cybersecurity', 'Ethical Hacking', 'OliCyber', 'CTF', 'Network Security'],
  },
  {
    id: '3',
    title: 'Personal Portfolio (This Site)',
    description: 'This website, built to showcase my journey and skills.',
    longDescription: "This personal portfolio was developed using Next.js, TypeScript, ShadCN UI, and Tailwind CSS to apply my web development skills and present my story.",
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxXZWJzaXRlfGVufDB8fHx8MTc0ODAwOTc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAiHint: 'website design code',
    sourceCodeUrl: '#', // Assuming you might add a link to the repo for this site later
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Web Development'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full bg-card">
    <div className="relative w-full h-48 sm:h-56 md:h-64">
      <Image
        src={project.image}
        alt={project.title}
        fill={true}
        style={{ objectFit: 'cover' }}
        data-ai-hint={project.imageAiHint}
        className="transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <CardHeader className="p-6">
      <CardTitle className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{project.title}</CardTitle>
      <CardDescription className="mt-2 text-muted-foreground h-20 overflow-hidden text-ellipsis">{project.description}</CardDescription>
    </CardHeader>
    <CardContent className="p-6 pt-0 flex-grow">
       <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs bg-secondary/70 text-secondary-foreground">
            {tag}
          </Badge>
        ))}
      </div>
      {project.longDescription && <p className="text-sm text-foreground leading-relaxed mb-4">{project.longDescription.substring(0,150)}...</p>}
    </CardContent>
    <CardFooter className="p-6 border-t border-border/40 flex flex-col sm:flex-row sm:justify-between items-center space-y-3 sm:space-y-0">
      {project.liveDemoUrl && (
        <Button asChild variant="default" className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
          <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Link>
        </Button>
      )}
      {project.sourceCodeUrl && (
        <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
          <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Source Code
          </Link>
        </Button>
      )}
      {!project.liveDemoUrl && !project.sourceCodeUrl && (
         <p className="text-sm text-muted-foreground">Details coming soon.</p>
      )}
    </CardFooter>
  </Card>
);

export default function ProjectSpotlightsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary flex items-center justify-center">
            <Briefcase className="mr-3 h-8 w-8 text-accent" />
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A collection of my work, showcasing my skills and passion for development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projectsData.map((project) => (
            <div key={project.id} className="group">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
