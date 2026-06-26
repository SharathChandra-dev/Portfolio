import { motion } from 'framer-motion';
import { FiBriefcase, FiCheck } from 'react-icons/fi';
import { experience } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function ExperienceSection() {
  return (
    <MotionSection id="experience">
      <SectionHeader eyebrow="Experience" title="A delivery timeline across React, Java, and MERN">
        Professional experience building responsive web applications, integrating APIs, improving performance, and collaborating across agile teams.
      </SectionHeader>

      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-electric via-pulse to-transparent md:block" />
        <div className="grid gap-6">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className="relative grid gap-5 rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl md:ml-14 md:grid-cols-[0.82fr_1.18fr] md:p-6"
              initial={{ opacity: 0, x: -34, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.56, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6, borderColor: 'rgba(255, 209, 102, 0.32)' }}
            >
              <div className="absolute -left-[3.6rem] top-6 hidden size-11 place-items-center rounded-2xl border border-electric/30 bg-carbon text-electric shadow-glow md:grid">
                <FiBriefcase aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-electric">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-slate-300">{item.company}</p>
                <p className="mt-1 text-sm text-slate-500">{item.location} - {item.type}</p>
              </div>
              <ul className="grid gap-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-1 grid size-5 flex-none place-items-center rounded-full bg-mint/15 text-mint">
                      <FiCheck className="size-3" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
