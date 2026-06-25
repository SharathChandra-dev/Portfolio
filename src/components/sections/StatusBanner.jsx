import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

export default function StatusBanner() {
  return (
    <section className="px-5 py-8 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-electric/25 bg-gradient-to-r from-electric/18 via-white/10 to-pulse/18 p-6 shadow-glow backdrop-blur-2xl sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-electric">
              <FiMapPin aria-hidden="true" />
              Current Status
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Currently seeking Frontend Developer, React Developer, and Full-Stack Development opportunities in Germany.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-frost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
          >
            Start a Conversation
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
