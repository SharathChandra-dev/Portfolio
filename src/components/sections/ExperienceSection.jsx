import { motion } from 'framer-motion';
import { FiBriefcase, FiCheck, FiMapPin, FiZap } from 'react-icons/fi';
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
        <div className="experience-mobile-rail absolute bottom-2 left-4 top-3 md:hidden" />
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-electric via-pulse to-transparent md:block" />
        <div className="grid gap-5 md:gap-6">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className="relative pl-10 md:pl-0"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -24 : 24,
                y: 28,
                rotate: index % 2 === 0 ? -1.4 : 1.4,
                scale: 0.96,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="experience-mobile-node absolute left-0 top-5 grid size-8 place-items-center rounded-xl border border-electric/35 bg-carbon text-xs font-bold text-electric md:hidden"
                animate={{ scale: [1, 1.08, 1], rotate: [0, -4, 0] }}
                transition={{ duration: 2.7, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              >
                {index + 1}
              </motion.span>

              <motion.article
                className="experience-card relative grid min-w-0 gap-5 rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl md:ml-14 md:grid-cols-[0.82fr_1.18fr] md:rounded-3xl md:p-6"
                whileHover={{ x: 6, borderColor: 'rgba(255, 209, 102, 0.32)' }}
                whileTap={{ scale: 0.985 }}
              >
                <div className="absolute -left-[3.6rem] top-6 hidden size-11 place-items-center rounded-2xl border border-electric/30 bg-carbon text-electric shadow-glow md:grid">
                  <FiBriefcase aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <div className="flex min-w-0 items-start justify-between gap-3 md:block">
                    <div className="min-w-0">
                      <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-semibold leading-5 text-electric md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-sm">
                        <FiZap className="size-3 flex-none md:hidden" aria-hidden="true" />
                        <span className="min-w-0 break-words">{item.period}</span>
                      </p>
                      <h3 className="mt-3 break-words font-display text-xl font-semibold leading-tight text-white sm:text-2xl md:mt-2 md:text-2xl">
                        {item.role}
                      </h3>
                    </div>
                    <span className="flex-none rounded-full border border-mint/25 bg-mint/10 px-2.5 py-1 text-[10px] font-bold uppercase text-mint md:hidden">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-3 break-words text-sm font-semibold text-slate-200 md:mt-2 md:text-base md:font-normal md:text-slate-300">
                    {item.company}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-xs text-slate-500 md:mt-1 md:block md:text-sm">
                    <FiMapPin className="size-3 flex-none text-pulse md:hidden" aria-hidden="true" />
                    <span>{item.location} <span className="hidden md:inline">- {item.type}</span></span>
                  </p>

                  <div className="experience-mobile-meter mt-4 md:hidden" aria-hidden="true">
                    <span style={{ width: `${82 - index * 8}%` }} />
                  </div>
                </div>

                <ul className="experience-point-row grid gap-3" aria-label={`${item.role} highlights`}>
                  {item.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      className="flex h-full min-w-0 gap-3 rounded-2xl border border-white/8 bg-white/8 px-3 py-2 text-sm leading-6 text-slate-300 md:h-auto md:border-0 md:bg-transparent md:px-0 md:py-0 md:leading-7"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.4, delay: 0.14 + pointIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="mt-0.5 grid size-5 flex-none place-items-center rounded-full bg-mint/15 text-mint md:mt-1">
                        <FiCheck className="size-3" aria-hidden="true" />
                      </span>
                      <span className="experience-point-copy min-w-0 break-words">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
