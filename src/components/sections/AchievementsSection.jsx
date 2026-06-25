import { motion } from 'framer-motion';
import { achievements, developmentHighlights } from '../../data/portfolio.js';
import AnimatedCounter from '../ui/AnimatedCounter.jsx';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function AchievementsSection() {
  return (
    <MotionSection id="achievements">
      <SectionHeader eyebrow="Achievements" title="Measurable experience with full-stack breadth">
        A concise snapshot of Sharath&apos;s delivery profile across professional roles, academic projects, and applied development practice.
      </SectionHeader>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => (
          <AnimatedCounter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {developmentHighlights.map((item, index) => (
          <motion.span
            key={item}
            className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-200"
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, borderColor: 'rgba(67, 232, 181, 0.36)' }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </MotionSection>
  );
}
