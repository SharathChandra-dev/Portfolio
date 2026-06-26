import { motion } from 'framer-motion';
import { FiActivity, FiCode, FiDatabase } from 'react-icons/fi';
import { githubActivity } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

const contributionWeeks = Array.from({ length: 26 }, (_, weekIndex) =>
  Array.from({ length: 7 }, (_, dayIndex) => {
    const seed = (weekIndex * 11 + dayIndex * 5 + Math.floor(weekIndex / 3)) % 13;
    return seed > 10 ? 4 : seed > 7 ? 3 : seed > 4 ? 2 : seed > 1 ? 1 : 0;
  }),
);

const contributionLevels = [
  'bg-white/8',
  'bg-electric/25',
  'bg-electric/45',
  'bg-pulse/55',
  'bg-mint/65',
];

const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

function ContributionGraph() {
  return (
    <div className="min-w-0 rounded-[1.5rem] border border-white/10 bg-ink/45 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <FiActivity aria-hidden="true" />
          Contribution Graph
        </p>
        <p className="text-xs text-slate-500">Last 6 months</p>
      </div>

      <div className="max-w-full overflow-x-auto rounded-2xl border border-white/10 bg-carbon/70 p-4">
        <div className="min-w-[520px]">
          <div className="mb-2 grid grid-cols-6 pl-10 text-[10px] font-semibold uppercase text-slate-500">
            {monthLabels.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>

          <div className="flex gap-3">
            <div className="grid grid-rows-7 gap-1.5 text-[10px] leading-[14px] text-slate-500">
              {dayLabels.map((day, index) => (
                <span key={`${day}-${index}`} className="h-3.5">
                  {day}
                </span>
              ))}
            </div>

            <div
              className="grid grid-flow-col grid-rows-7 gap-1.5"
              style={{ gridTemplateRows: 'repeat(7, 14px)', gridAutoColumns: '14px' }}
              aria-label="GitHub contribution graph preview"
            >
              {contributionWeeks.flatMap((week, weekIndex) =>
                week.map((value, dayIndex) => (
                  <motion.span
                    key={`${weekIndex}-${dayIndex}`}
                    title={`${value} contribution intensity`}
                    className={`rounded-[4px] border border-white/5 ${contributionLevels[value]}`}
                    initial={{ opacity: 0, scale: 0.35 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{
                      duration: 0.22,
                      delay: (weekIndex % 9) * 0.012 + dayIndex * 0.008,
                      ease: 'easeOut',
                    }}
                  />
                )),
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-slate-500">
            <span>Less</span>
            {contributionLevels.map((level, index) => (
              <span key={level} className={`size-3 rounded-[4px] border border-white/5 ${level}`} aria-label={`Level ${index}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnologyCard({ tech, index }) {
  const Icon = ['MySQL', 'MongoDB'].includes(tech.name) ? FiDatabase : FiCode;

  return (
    <motion.article
      className="group min-w-0 rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl"
      initial={{ opacity: 0, y: index % 2 === 0 ? 28 : -28, rotate: index % 2 === 0 ? -1.5 : 1.5, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7, rotate: index % 2 === 0 ? 1.2 : -1.2, borderColor: 'rgba(67, 232, 181, 0.34)' }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-semibold text-white">
          <Icon className="size-4 text-electric" aria-hidden="true" />
          {tech.name}
        </p>
        <span className="text-xs font-semibold text-electric">{tech.level}%</span>
      </div>
      <p className="mt-3 min-h-12 text-xs leading-5 text-slate-400">{tech.summary}</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric via-pulse to-mint"
          initial={{ width: 0 }}
          whileInView={{ width: `${tech.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.72, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.article>
  );
}

export default function GitHubSection() {
  return (
    <MotionSection id="activity" className="bg-carbon/60">
      <SectionHeader eyebrow="Development Activity" title="Contribution rhythm across frontend and backend tools">
        Contribution graph plus the stack percentages you wanted recruiters to see without adding a long extra scroll.
      </SectionHeader>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <ContributionGraph />

        <div className="mobile-scroll-row min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {githubActivity.technologies.map((tech, index) => (
            <TechnologyCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
