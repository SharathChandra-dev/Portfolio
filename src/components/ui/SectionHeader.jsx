import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  const centered = align === 'center';

  return (
    <motion.div
      className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase text-electric">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{children}</p>}
    </motion.div>
  );
}
