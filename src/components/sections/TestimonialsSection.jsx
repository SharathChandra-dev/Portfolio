import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import { testimonials } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function TestimonialsSection() {
  return (
    <MotionSection id="testimonials">
      <SectionHeader eyebrow="Testimonials" title="Professional feedback that matches the work">
        Collaboration signals from management, engineering teammates, and client-facing delivery.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -6 }}
          >
            <FiMessageCircle className="size-7 text-electric" aria-hidden="true" />
            <p className="mt-5 text-sm leading-7 text-slate-300">&quot;{testimonial.quote}&quot;</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
