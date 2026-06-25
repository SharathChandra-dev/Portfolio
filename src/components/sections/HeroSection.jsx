import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import { SiJavascript, SiMongodb } from 'react-icons/si';
import { TbBrandGit } from 'react-icons/tb';
import { heroTech, profile } from '../../data/portfolio.js';
import ExternalButton from '../ui/ExternalButton.jsx';

const techIconMap = {
  React: FaReact,
  JavaScript: SiJavascript,
  'Node.js': FaNodeJs,
  MongoDB: SiMongodb,
  Laravel: FaLaravel,
  Git: TbBrandGit,
};

function FloatingTechBadge({ tech, index }) {
  const Icon = techIconMap[tech] ?? FaReact;
  const positions = [
    'left-0 top-10',
    'right-2 top-7',
    'left-8 bottom-9',
    'right-6 bottom-16',
    'left-1/2 top-0 -translate-x-1/2',
    'right-1/3 bottom-0',
  ];

  return (
    <motion.div
      className={`absolute ${positions[index]} hidden rounded-2xl border border-white/15 bg-white/10 p-3 text-white shadow-glow backdrop-blur-xl sm:block`}
      animate={{ y: [0, -12, 0], rotate: [0, index % 2 ? 4 : -4, 0] }}
      transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
      aria-label={tech}
    >
      <Icon className="size-5" aria-hidden="true" />
    </motion.div>
  );
}

function AnimatedWorkspace() {
  const { scrollY } = useScroll();
  const workspaceY = useTransform(scrollY, [0, 700], [0, -34]);
  const workspaceRotate = useTransform(scrollY, [0, 700], [0, -2.4]);
  const codeLines = ['const product = await api.fetch();', 'setCart(sync(product.items));', 'return <Checkout ready />;'];
  const pipeline = [
    { label: 'API', value: 82 },
    { label: 'UI', value: 91 },
    { label: 'QA', value: 96 },
  ];

  return (
    <div className="relative mx-auto w-full max-w-lg pt-14 sm:pt-16" aria-label="Animated coding workspace">
      {heroTech.map((tech, index) => (
        <FloatingTechBadge key={tech} tech={tech} index={index} />
      ))}

      <motion.div
        className="glass-card overflow-hidden shadow-glow"
        style={{ y: workspaceY, rotate: workspaceRotate }}
        initial={{ opacity: 0, rotateX: 8, scale: 0.96 }}
        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/8 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff6b6b]" />
          <span className="size-3 rounded-full bg-[#ffd166]" />
          <span className="size-3 rounded-full bg-mint" />
          <span className="ml-auto text-xs text-slate-400">portfolio.jsx</span>
        </div>
        <div className="grid gap-5 p-5 sm:p-6">
          <div className="rounded-2xl border border-electric/20 bg-carbon/80 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-semibold text-electric">
                React delivery
              </span>
              <span className="text-xs text-slate-500">99ms</span>
            </div>
            <div className="space-y-3 font-mono text-xs leading-6 text-slate-300 sm:text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.16 }}
                >
                  <span className="select-none text-slate-600">{index + 1}</span>
                  <span>{line}</span>
                  <motion.span
                    className="ml-auto hidden h-2 w-2 rounded-full bg-mint sm:block"
                    animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.15, 0.85] }}
                    transition={{ duration: 1.7, repeat: Infinity, delay: index * 0.25 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {pipeline.map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/8 p-4"
                animate={{ y: [0, -6, 0], borderColor: ['rgba(255,255,255,0.1)', 'rgba(67,232,181,0.34)', 'rgba(255,255,255,0.1)'] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.42 }}
              >
                <p className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  {item.label}
                  <span className="text-mint">{item.value}%</span>
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-electric via-[#ffd166] to-mint"
                    initial={{ width: '20%' }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1.4, delay: 0.6 + index * 0.12 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-electric backdrop-blur-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Available for frontend, React, and full-stack opportunities in Germany
          </motion.p>
          <motion.h1
            className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-white via-electric to-pulse bg-clip-text text-transparent">
              {profile.displayName}
            </span>
          </motion.h1>
          <motion.p
            className="mt-5 font-display text-2xl font-medium text-slate-200 sm:text-3xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {profile.headline}
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            Passionate software developer specializing in React.js, modern JavaScript, scalable frontend architecture, API integration, and full-stack web development.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <ExternalButton href="#projects" variant="primary">
              <FiArrowDown aria-hidden="true" />
              View Projects
            </ExternalButton>
            <ExternalButton href={profile.resume} download variant="secondary">
              <FiDownload aria-hidden="true" />
              Download Resume
            </ExternalButton>
            <ExternalButton href="#contact" variant="accent">
              <FiMail aria-hidden="true" />
              Contact Me
            </ExternalButton>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            aria-label="Technology stack"
          >
            {heroTech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <AnimatedWorkspace />
      </div>
    </section>
  );
}
