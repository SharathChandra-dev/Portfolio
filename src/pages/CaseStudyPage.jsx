import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/portfolio.js';
import ExternalButton from '../components/ui/ExternalButton.jsx';

const detailFields = [
  ['Problem', 'problem'],
  ['Approach', 'approach'],
  ['Implementation', 'implementation'],
  ['Challenges', 'challenges'],
  ['Results', 'results'],
];

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="px-5 pb-20 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-electric/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
        >
          <FiArrowLeft aria-hidden="true" />
          Back to Projects
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <img
              src={project.preview}
              alt={`${project.title} interface preview`}
              className="aspect-[16/11] w-full object-cover object-top"
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-electric">{project.category} - {project.year}</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-electric/20 bg-electric/10 px-3 py-2 text-sm font-medium text-electric">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ExternalButton href={project.demoUrl} disabled={!project.demoUrl} variant="secondary">
                  <FiExternalLink aria-hidden="true" />
                  Live Demo
                </ExternalButton>
                <ExternalButton href={project.repoUrl} disabled={!project.repoUrl} variant="secondary">
                  <FiGithub aria-hidden="true" />
                  GitHub
                </ExternalButton>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {detailFields.map(([label, key], index) => (
              <motion.section
                key={label}
                className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <h2 className="font-display text-xl font-semibold text-white">{label}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project[key]}</p>
              </motion.section>
            ))}

            <motion.section
              className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: detailFields.length * 0.06 }}
            >
              <h2 className="font-display text-xl font-semibold text-white">Key Features</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span key={feature} className="rounded-full border border-white/10 bg-ink/35 px-3 py-2 text-sm text-slate-300">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.section>

            {project.gallery?.length > 0 && (
              <motion.section
                className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (detailFields.length + 1) * 0.06 }}
              >
                <h2 className="font-display text-xl font-semibold text-white">Project Screens</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.gallery.map((screen, index) => (
                    <img
                      key={screen}
                      src={screen}
                      alt={`${project.title} screen ${index + 1}`}
                      className="aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover object-top"
                      loading="lazy"
                    />
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
