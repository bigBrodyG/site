import HeroSection from '@/components/sections/hero-section';
import ProjectSpotlightsSection from '@/components/sections/project-spotlights-section';
import TimelineSection from '@/components/sections/timeline-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProjectSpotlightsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}
