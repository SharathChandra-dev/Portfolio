import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return undefined;
    }

    let frameId;
    const duration = 1200;
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="glass-card relative overflow-hidden p-6"
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      whileHover={{ y: -8, scale: 1.015, borderColor: 'rgba(53, 167, 255, 0.45)' }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />
      <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium text-slate-300">{label}</p>
    </motion.div>
  );
}
