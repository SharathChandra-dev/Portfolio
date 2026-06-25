import { motion } from 'framer-motion';
import { FaDatabase, FaReact } from 'react-icons/fa';
import { FiCode, FiCpu, FiLayers, FiTool } from 'react-icons/fi';
import { skillGroups, certifications } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

const icons = {
  Frontend: FaReact,
  Backend: FiCpu,
  Database: FaDatabase,
  'Tools & DevOps': FiTool,
  Testing: FiLayers,
  Languages: FiCode,
};

export default function SkillsSection() {
  return (
    <MotionSection id="skills" className="bg-carbon/60">
      <SectionHeader eyebrow="Tech Stack" title="The tools behind the product work">
        Skills are grouped by the way Sharath ships: polished interfaces, dependable APIs, database-backed workflows, and disciplined testing.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.title] ?? FiCode;

          return (
            <motion.article
              key={group.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 28, rotateX: 7, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.28 }}
              transition={{ duration: 0.52, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.015, borderColor: 'rgba(53, 167, 255, 0.4)' }}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl border border-electric/25 bg-electric/12 text-electric">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-electric/10 to-pulse/10 p-6 backdrop-blur-xl">
        <h3 className="font-display text-xl font-semibold text-white">Certifications</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <p key={cert} className="rounded-2xl border border-white/10 bg-ink/35 px-4 py-3 text-sm text-slate-300">
              {cert}
            </p>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
