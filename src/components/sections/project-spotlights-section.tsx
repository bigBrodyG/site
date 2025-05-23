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
    title: 'Sistemi Embedded: Arduino & ESP32',
    description: "Esplorazione e sviluppo con microcontrollori Arduino ed ESP32, approfondendo l'interazione hardware-software.",
    longDescription: "Dal 2020 al 2024, ho dedicato tempo all'apprendimento e alla sperimentazione con sistemi embedded, utilizzando piattaforme come Arduino ed ESP32 per realizzare piccoli progetti e comprendere il funzionamento dei microcontrollori.",
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'microcontroller circuit',
    tags: ['Arduino', 'ESP32', 'Microcontrollori', 'C/C++', 'Elettronica'],
  },
  {
    id: '2',
    title: 'Percorso in Cybersecurity e OliCyber',
    description: 'Approfondimento della cybersecurity e partecipazione alla competizione OliCyber, con preparazione per future sfide.',
    longDescription: "A partire dal 2024, la cybersecurity è diventata il mio interesse principale. Ho partecipato a OliCyber, classificandomi 69° a livello nazionale e partecipando alla finale (75°). Attualmente mi preparo per CyberChallenge.IT.",
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'cyber security',
    tags: ['Cybersecurity', 'Ethical Hacking', 'OliCyber', 'CTF', 'Network Security'],
  },
  {
    id: '3',
    title: 'Portfolio Personale (Questo Sito)',
    description: 'Questo sito web, costruito per presentare il mio percorso e le mie competenze.',
    longDescription: "Questo portfolio personale è stato sviluppato utilizzando Next.js, TypeScript, ShadCN UI e Tailwind CSS per mettere in pratica le mie competenze di sviluppo web e presentare la mia storia.",
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'website design code',
    sourceCodeUrl: '#', // Assuming '#' means no link for now, user can update
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Sviluppo Web'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full bg-card">
    <div className="relative w-full h-48 sm:h-56 md:h-64">
      <Image
        src={project.image}
        alt={project.title}
        fill={true} // Changed from layout="fill" for Next.js 13+
        style={{ objectFit: 'cover' }} // Changed from objectFit="cover"
        data-ai-hint={project.imageAiHint}
        className="transition-transform duration-500 group-hover:scale-105"
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
            <ExternalLink className="mr-2 h-4 w-4" /> Demo Live
          </Link>
        </Button>
      )}
      {project.sourceCodeUrl && (
        <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
          <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Codice Sorgente
          </Link>
        </Button>
      )}
      {!project.liveDemoUrl && !project.sourceCodeUrl && (
         <p className="text-sm text-muted-foreground">Dettagli in arrivo.</p>
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
            I Miei Progetti
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Una raccolta dei miei lavori, che mostrano le mie competenze e la mia passione per lo sviluppo.
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
