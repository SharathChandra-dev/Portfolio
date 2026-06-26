import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiLayers, FiMonitor } from 'react-icons/fi';
import { projects } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

const [spotlightProject, ...supportingProjects] = projects;

function FeatureList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.slice(0, 4).map((item) => (
        <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-slate-300">
          {item}
        </span>
      ))}
    </div>
  );
}

function TechList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.slice(0, 4).map((tech) => (
        <span key={tech} className="rounded-full border border-electric/20 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric">
          {tech}
        </span>
      ))}
    </div>
  );
}

function CaseStudyLink({ slug, children = 'Case Study' }) {
  return (
    <Link
      to={`/case-study/${slug}`}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-frost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
    >
      {children}
      <FiArrowRight aria-hidden="true" />
    </Link>
  );
}

function SpotlightProject() {
  return (
    <motion.article
      className="project-card grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 backdrop-blur-2xl lg:grid-cols-[1.02fr_0.98fr]"
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative min-h-72 overflow-hidden bg-carbon/80">
        <img
          src={spotlightProject.preview}
          alt={`${spotlightProject.title} screenshot preview`}
          className="h-full min-h-72 w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-transparent to-white/8" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
          {spotlightProject.category} - {spotlightProject.year}
        </span>
      </div>

      <div className="flex flex-col p-6 sm:p-7">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase text-mint">
          <FiMonitor aria-hidden="true" />
          Spotlight build
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {spotlightProject.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-300">
          {spotlightProject.description}
        </p>

        <div className="mt-5 grid gap-4">
          <FeatureList items={spotlightProject.features} />
          <TechList items={spotlightProject.technologies} />
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <CaseStudyLink slug={spotlightProject.slug} />
        </div>
      </div>
    </motion.article>
  );
}

function CompactProject({ project, index }) {
  return (
    <motion.article
      className="project-card flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-electric/35"
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden bg-carbon/80">
        <img
          src={project.preview}
          alt={`${project.title} screenshot preview`}
          className="aspect-[16/10] w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-tight text-white">{project.title}</h3>
          <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-400">{project.year}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
        <div className="mt-4">
          <FeatureList items={project.features.slice(0, 3)} />
        </div>
        <div className="mt-4">
          <TechList items={project.technologies.slice(0, 3)} />
        </div>
        <div className="mt-auto flex pt-6">
          <CaseStudyLink slug={project.slug}>View Details</CaseStudyLink>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <MotionSection id="projects">
      <SectionHeader eyebrow="Featured Projects" title="A focused project tour without the duplicate scroll">
        Four selected builds, each kept short on the homepage with deeper case studies one click away.
      </SectionHeader>

      <div className="grid gap-6">
        <SpotlightProject />

        <div className="mobile-scroll-row gap-5 lg:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <CompactProject key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-carbon/70 p-5">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase text-electric">
            <FiLayers aria-hidden="true" />
            What these projects prove
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            React delivery, responsive interfaces, API-connected workflows, practical JavaScript logic, Laravel/MySQL modules, and product thinking across commerce, restaurant, travel, and sustainability use cases.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
