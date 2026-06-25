import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiMonitor, FiTarget } from 'react-icons/fi';
import { projects } from '../../data/portfolio.js';
import ExternalButton from '../ui/ExternalButton.jsx';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card group/card glass-card flex h-full flex-col overflow-hidden"
      initial={{ opacity: 0, y: 42, rotateX: 7, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.24 }}
      transition={{ duration: 0.68, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.015, borderColor: 'rgba(67, 232, 181, 0.42)' }}
    >
      <div className="relative overflow-hidden border-b border-white/10 bg-carbon/80">
        <motion.img
          src={project.preview}
          alt={`${project.title} screenshot preview`}
          className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover/card:scale-[1.05]"
          loading="lazy"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-white/8 opacity-90" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
          <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-400">{project.year}</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-electric">
            <FiTarget aria-hidden="true" />
            Key Features
          </p>
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 5).map((feature) => (
              <span key={feature} className="rounded-full bg-white/8 px-3 py-1.5 text-xs text-slate-300">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-electric/20 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-400">
          <p>
            <span className="font-semibold text-slate-200">Challenge solved:</span> {project.challenge}
          </p>
          <p>
            <span className="font-semibold text-slate-200">Impact:</span> {project.impact}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <ExternalButton href={project.demoUrl} disabled={!project.demoUrl} variant="secondary">
            <FiMonitor aria-hidden="true" />
            Live Demo
          </ExternalButton>
          <ExternalButton href={project.repoUrl} disabled={!project.repoUrl} variant="secondary">
            <FiGithub aria-hidden="true" />
            GitHub
          </ExternalButton>
          <Link
            to={`/case-study/${project.slug}`}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-frost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
          >
            Case Study
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <MotionSection id="projects">
      <SectionHeader eyebrow="Featured Projects" title="Production-minded work across commerce, travel, restaurant, and sustainability apps">
        Each project highlights the technical stack, product problem, implementation decisions, and the kind of impact recruiters look for.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </MotionSection>
  );
}
