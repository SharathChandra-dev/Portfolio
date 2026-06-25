import { motion } from 'framer-motion';
import { FiCheckCircle, FiCode, FiMapPin, FiUser } from 'react-icons/fi';
import { education, highlights, profile } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function AboutSection() {
  return (
    <MotionSection id="about" className="bg-carbon/60">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader eyebrow="About Me" title="Modern frontend craft with full-stack range">
            Master&apos;s student and software developer with practical industry experience delivering production-ready applications.
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-slate-300"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <FiCheckCircle className="mt-1 size-4 flex-none text-mint" aria-hidden="true" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <motion.div
            className="glass-card overflow-hidden p-6"
            initial={{ opacity: 0, x: 28, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.32 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          >
            <div className="grid gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-64 overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-electric/25 via-white/10 to-pulse/25 p-4">
                <div className="absolute inset-4 rounded-[1.5rem] border border-white/10 bg-ink/40" />
                <img
                  src={profile.photo}
                  alt={profile.fullName}
                  className="relative h-full w-full rounded-[1.4rem] object-cover object-[50%_32%] shadow-glow"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase text-electric">
                  <FiUser aria-hidden="true" />
                  Munich-based Developer
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{profile.fullName}</h3>
                <p className="mt-3 leading-7 text-slate-300">{profile.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-2">
                    <FiMapPin aria-hidden="true" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-2">
                    <FiCode aria-hidden="true" />
                    React.js specialist
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <motion.article
                key={item.degree}
                className="glass-card p-5"
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm font-semibold text-electric">{item.period}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.degree}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.school}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.focus}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
