import type { TimelineItem, Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award, Star, Zap, Code, Milestone, FlaskConical, Calculator, Cpu, Shield, Target, Terminal, KeyRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from "@/components/ui/progress";

const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'Inizio Studi Scientifici',
    institution: 'Istituto Tecnico',
    date: '2021',
    description: 'Inizio del percorso con fisica e chimica, partecipando attivamente alle lezioni proposte dal mio istituto.',
    icon: FlaskConical,
  },
  {
    id: '2',
    type: 'achievement',
    title: 'Olimpiadi della Chimica',
    institution: 'Livello Nazionale',
    date: '2023',
    description: 'Partecipazione alle Olimpiadi della Chimica.',
    icon: Award,
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Gare di Matematica Bocconi',
    institution: 'Università Bocconi',
    date: '2023 & 2025',
    description: 'Partecipazione alle gare di matematica organizzate dalla Bocconi.',
    icon: Calculator,
  },
  {
    id: '4',
    type: 'work',
    title: 'Sviluppo Sistemi Embedded',
    institution: 'Progetti Personali',
    date: '2020 - 2024',
    description: 'Lavoro e sperimentazione con microcontrollori come Arduino ed ESP32.',
    icon: Cpu,
  },
  {
    id: '5',
    type: 'education',
    title: 'Interesse per la Cybersecurity',
    date: '2024',
    description: 'Scoperta e inizio approfondimento nel campo della cybersecurity, che è diventato il mio principale interesse.',
    icon: Shield,
  },
  {
    id: '6',
    type: 'achievement',
    title: 'OliCyber - Finale Nazionale',
    institution: 'Torino',
    date: '2025',
    description: 'Classificato 69° in Italia e partecipazione alla fase finale a Torino, classificandomi 75°.',
    icon: Award,
  },
  {
    id: '7',
    type: 'education',
    title: 'Preparazione CyberChallenge.IT',
    institution: 'Università di Parma',
    date: 'In corso',
    description: 'Preparazione per CyberChallenge.IT, con l’obiettivo di migliorare le competenze in ethical hacking e partecipare all’edizione 2026.',
    icon: Target,
  },
  {
    id: '8',
    type: 'achievement',
    title: 'Primo Posto - Giochi di Archimede',
    institution: 'Presso il mio Istituto (Triennio)',
    date: '2025',
    description: 'Classificato primo nel mio istituto nei Giochi di Archimede per il triennio.',
    icon: Award,
  },
];

const skillsData: Skill[] = [
  { id: 's1', name: 'Cybersecurity', level: 90, icon: Shield },
  { id: 's2', name: 'Programmazione C', level: 95, icon: Code, description: "Competenze avanzate grazie agli insegnamenti del Prof. Ramon Ugolotti." },
  { id: 's3', name: 'Sistemi Embedded (Arduino, ESP32)', level: 85, icon: Cpu },
  { id: 's4', name: 'Linux (Arch Linux, Hyprland)', level: 90, icon: Terminal },
  { id: 's5', name: 'Python', level: 70, icon: Code },
  { id: 's6', name: 'JavaScript', level: 70, icon: Code },
  { id: 's7', name: 'Fisica e Chimica', level: 75, icon: FlaskConical },
  { id: 's8', name: 'Matematica', level: 80, icon: Calculator },
  { id: 's9', name: 'Ethical Hacking', level: 80, icon: KeyRound },
];

const TimelineEvent = ({ item, index }: { item: TimelineItem, index: number }) => {
  const IconComponent = item.icon || Star;
  const isEven = index % 2 === 0;

  const cardClasses = `p-4 rounded-2xl my-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card mr-auto 
    ${isEven 
      ? 'md:col-start-1 md:col-span-3 md:ml-auto' 
      : 'md:col-start-7 md:col-span-3 md:mr-auto'
    }`;
    
  const iconContainerClasses = "hidden md:block col-start-5 col-end-6 md:mx-auto relative";

  return (
    <div className={`flex md:contents ${isEven ? '' : 'md:flex-row-reverse'}`}>
      {!isEven && <div className={iconContainerClasses}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-border pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow">
           <IconComponent className="h-4 w-4 text-primary-foreground mx-auto my-1" />
        </div>
      </div>}
      <Card className={cardClasses}>
        <CardHeader className="p-0 mb-2">
          <div className="flex items-center mb-1">
            <IconComponent className="h-6 w-6 text-accent mr-3" />
            <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
          </div>
          {item.institution && <p className="text-sm font-medium text-muted-foreground">{item.institution}</p>}
          <p className="text-xs text-accent font-semibold">{item.date}</p>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-sm text-foreground leading-relaxed">{item.description}</p>
        </CardContent>
      </Card>
      {isEven && <div className={iconContainerClasses}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-border pointer-events-none"></div>
        </div>
         <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow">
           <IconComponent className="h-4 w-4 text-primary-foreground mx-auto my-1" />
        </div>
      </div>}
    </div>
  );
};


export default function TimelineSection() {
  return (
    <section id="timeline" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary flex items-center justify-center">
            <Milestone className="mr-3 h-8 w-8 text-accent" />
            Il Mio Percorso e Competenze
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ripercorrendo la mia strada attraverso istruzione, esperienze e traguardi.
          </p>
        </div>

        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          {timelineData.map((item, index) => (
            <TimelineEvent key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary text-center mb-10 sm:mb-12 flex items-center justify-center">
            <Star className="mr-3 h-7 w-7 text-accent" />
            Competenze Chiave
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillsData.map((skill) => {
              const Icon = skill.icon || Star;
              return (
                <Card key={skill.id} className="rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Icon className="h-6 w-6 text-accent mr-3" />
                    <h4 className="text-lg font-semibold text-primary">{skill.name}</h4>
                  </div>
                  {skill.level && (
                    <Progress value={skill.level} className="h-3 rounded-full [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
                  )}
                  {skill.description && (
                    <p className="text-xs text-muted-foreground mt-2">{skill.description}</p>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
