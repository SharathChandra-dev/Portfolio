import { motion } from 'framer-motion';

export default function MotionSection({ id, className = '', children }) {
  const movesDown = ['experience', 'projects', 'activity'].includes(id);
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: movesDown ? -44 : 44,
      rotate: movesDown ? 1.2 : -1.2,
      scale: 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  };

  return (
    <motion.section
      id={id}
      className={`section-shell motion-section ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16, margin: '-70px 0px -90px 0px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
