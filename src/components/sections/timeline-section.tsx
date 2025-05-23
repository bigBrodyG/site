import type { TimelineItem, Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award, Star, Zap, Code, Milestone, FlaskConical, Calculator, Cpu, Shield, Target, Terminal, KeyRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from "@/components/ui/progress";

const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'Beginning of Scientific Studies',
    institution: 'Technical Institute',
    date: '2021',
    description: 'Started my journey with physics and chemistry, actively participating in lessons offered by my institute.',
    icon: FlaskConical,
  },
  {
    id: '2',
    type: 'achievement',
    title: 'Chemistry Olympiads',
    institution: 'National Level',
    date: '2023',
    description: 'Participation in the Chemistry Olympiads.',
    icon: Award,
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Bocconi Math Competitions',
    institution: 'Bocconi University',
    date: '2023 & 2025',
    description: 'Participation in math competitions organized by Bocconi University.',
    icon: Calculator,
  },
  {
    id: '4',
    type: 'work',
    title: 'Embedded Systems Development',
    institution: 'Personal Projects',
    date: '2020 - 2024',
    description: 'Working and experimenting with microcontrollers like Arduino and ESP32.',
    icon: Cpu,
  },
  {
    id: '5',
    type: 'education',
    title: 'Interest in Cybersecurity',
    date: '2024',
    description: 'Discovered and began exploring the field of cybersecurity, which has become my main interest.',
    icon: Shield,
  },
  {
    id: '6',
    type: 'achievement',
    title: 'OliCyber - National Finals',
    institution: 'Turin',
    date: '2025',
    description: 'Placed 69th in Italy and participated in the final phase in Turin, placing 75th.',
    icon: Award,
  },
  {
    id: '7',
    type: 'education',
    title: 'CyberChallenge.IT Preparation',
    institution: 'University of Parma',
    date: 'Ongoing',
    description: 'Preparing for CyberChallenge.IT, aiming to improve my ethical hacking skills and participate in the 2026 edition.',
    icon: Target,
  },
  {
    id: '8',
    type: 'achievement',
    title: 'First Place - Archimedes Games',
    institution: 'At my Institute (Three-year period)',
    date: '2025',
    description: 'Ranked first in my institute in the Archimedes Games for the three-year period.',
    icon: Award,
  },
];

const skillsData: Skill[] = [
  { id: 's2', name: 'C Programming', level: 95, icon: Code, description: "Advanced skills thanks to the teachings of Prof. Ramon Ugolotti." },
  { id: 's5', name: 'Python', level: 85, icon: Code, description: "Used for scripting, automation, and development." },
  { id: 's6', name: 'JavaScript', level: 40, icon: Code, description: "Front-end web development and interactivity." },
  { id: 's8', name: 'Mathematics', level: 95, icon: Calculator, description: "Solid foundation for problem-solving and analysis." },
  { id: 's3', name: 'Embedded Systems (Arduino, ESP32)', level: 50, icon: Cpu, description: "Design and programming of microcontrollers." },
  { id: 's7', name: 'Physics & Chemistry', level: 90, icon: FlaskConical, description: "Understanding of fundamental scientific principles." },
  { id: 's4', name: 'Linux (Arch Linux, Hyprland)', level: 85, icon: Terminal, description: "System administration and advanced customization." },
  { id: 's1', name: 'Cybersecurity', level: 60, icon: Shield, description: "Study of information security and network defense." },
  { id: 's9', name: 'Ethical Hacking', level: 25, icon: KeyRound, description: "Penetration testing and vulnerability assessment techniques." },
];

const TimelineEvent = ({ item, index }: { item: TimelineItem, index: number }) => {
  const IconComponent = item.icon || Star;
  const isEven = index % 2 === 0;

  const cardClasses = `p-4 rounded-2xl my-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card md:col-span-3 
    ${isEven 
      ? 'md:col-start-1' 
      : 'md:col-start-7'
    }`;
    
  const iconContainerClasses = "hidden md:block col-start-5 col-end-6 mx-auto relative";

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
            My Journey and Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Retracing my path through education, experiences, and achievements.
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
            Key Skills
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
