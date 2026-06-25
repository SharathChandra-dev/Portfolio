import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiLayers } from 'react-icons/fi';
import { projects } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

const caseFields = [
  ['Problem', 'problem'],
  ['Approach', 'approach'],
  ['Results', 'results'],
];

export default function CaseStudiesSection() {
  return (
    <MotionSection id="case-studies" className="bg-carbon/60">
      <SectionHeader eyebrow="Project Case Studies" title="Engineering decisions, not just screenshots">
        Detailed case studies frame every project around problem, approach, implementation, challenges, results, and technologies used.
      </SectionHeader>

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl lg:p-6"
            initial={{ opacity: 0, y: 34, scale: 0.975 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.52, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, borderColor: 'rgba(53, 167, 255, 0.32)' }}
          >
            <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-electric">
                  <FiLayers aria-hidden="true" />
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="mt-4 aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover object-top"
                  loading="lazy"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {caseFields.map(([label, key]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-ink/35 p-4">
                    <p className="text-xs font-semibold uppercase text-pulse">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{project[key]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <Link
                to={`/case-study/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-electric transition hover:bg-electric/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              >
                View Full Breakdown
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
