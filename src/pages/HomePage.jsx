import { Suspense, lazy } from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';

const AboutSection = lazy(() => import('../components/sections/AboutSection.jsx'));
const ExperienceSection = lazy(() => import('../components/sections/ExperienceSection.jsx'));
const SkillsSection = lazy(() => import('../components/sections/SkillsSection.jsx'));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection.jsx'));
const AchievementsSection = lazy(() => import('../components/sections/AchievementsSection.jsx'));
const GitHubSection = lazy(() => import('../components/sections/GitHubSection.jsx'));
const ContactSection = lazy(() => import('../components/sections/ContactSection.jsx'));

function SectionFallback() {
  return (
    <section className="section-shell" aria-hidden="true">
      <div className="h-40 animate-pulse rounded-[2rem] border border-white/10 bg-white/8" />
    </section>
  );
}

function DeferredSection({ children }) {
  return <Suspense fallback={<SectionFallback />}>{children}</Suspense>;
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DeferredSection>
        <AboutSection />
      </DeferredSection>
      <DeferredSection>
        <ExperienceSection />
      </DeferredSection>
      <DeferredSection>
        <SkillsSection />
      </DeferredSection>
      <DeferredSection>
        <ProjectsSection />
      </DeferredSection>
      <DeferredSection>
        <AchievementsSection />
      </DeferredSection>
      <DeferredSection>
        <GitHubSection />
      </DeferredSection>
      <DeferredSection>
        <ContactSection />
      </DeferredSection>
    </>
  );
}
