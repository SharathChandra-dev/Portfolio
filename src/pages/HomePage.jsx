import AboutSection from '../components/sections/AboutSection.jsx';
import AchievementsSection from '../components/sections/AchievementsSection.jsx';
import CaseStudiesSection from '../components/sections/CaseStudiesSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import ExperienceSection from '../components/sections/ExperienceSection.jsx';
import GitHubSection from '../components/sections/GitHubSection.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import StatusBanner from '../components/sections/StatusBanner.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <AchievementsSection />
      <GitHubSection />
      <TestimonialsSection />
      <StatusBanner />
      <ContactSection />
    </>
  );
}
