import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiMapPin, FiZap } from 'react-icons/fi';
import { heroTech, profile, projects } from '../../data/portfolio.js';
import ExternalButton from '../ui/ExternalButton.jsx';

const heroMetrics = [
  { value: '2+', label: 'years experience' },
  { value: '5+', label: 'featured builds' },
  { value: 'Full Stack', label: 'core craft' },
];

const codeLines = [
  'ship responsive interfaces',
  'connect APIs and backend state',
  'model data into product flows',
];

function TechRail() {
  return (
    <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Technology stack">
      {heroTech.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
    </div>
  );
}

function HeroMetricStrip({ className = '' }) {
  return (
    <div className={`hero-metric-strip ${className}`} aria-label="Portfolio highlights">
      {heroMetrics.map((metric) => (
        <div key={metric.label} className="hero-metric-card">
          <p className="hero-metric-value">{metric.value}</p>
          <p className="hero-metric-label">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function MobileCapabilityPanel() {
  return (
    <div className="mobile-capability-panel mt-5" aria-label="Full-stack delivery highlights">
      {codeLines.map((line, index) => (
        <motion.article
          key={line}
          className="mobile-capability-tile"
          initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -1 : 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.42, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="grid size-8 flex-none place-items-center rounded-xl bg-electric/12 font-mono text-xs font-semibold text-electric">
            0{index + 1}
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase text-mint">
              {index === 0 ? 'Frontend' : index === 1 ? 'Backend' : 'Data flow'}
            </p>
            <p className="mt-1 text-sm font-semibold leading-5 text-white">{line}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function DesktopCommandDeck() {
  const mainProject = projects[0];

  return (
    <motion.div
      className="relative hidden min-h-[570px] lg:block"
      initial={{ opacity: 0, x: 32, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Portfolio command deck"
    >
      <div className="hero-grid-panel absolute inset-0 rounded-[2rem] border border-white/10 bg-carbon/70" />

      <div className="hero-panel absolute left-4 top-8 w-[310px] rounded-[1.6rem] border border-white/12 bg-ink/80 p-5 shadow-glow backdrop-blur-2xl">
        <div className="flex items-center gap-4">
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="size-20 rounded-2xl border border-white/15 object-cover object-[50%_32%]"
            width="80"
            height="80"
            decoding="async"
          />
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase text-mint">
              <FiZap aria-hidden="true" />
              Available in Germany
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-white">
              {profile.displayName}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
              <FiMapPin aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {codeLines.map((line, index) => (
            <div key={line} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/8 px-4 py-3">
              <span className="grid size-7 place-items-center rounded-lg bg-electric/12 font-mono text-xs text-electric">
                0{index + 1}
              </span>
              <span className="text-sm text-slate-300">{line}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-panel hero-panel-delay absolute right-4 top-24 w-[320px] overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/8 shadow-violet backdrop-blur-2xl">
        <div className="relative overflow-hidden bg-carbon/80">
          <img
            src={mainProject.preview}
            alt={`${mainProject.title} preview`}
            className="aspect-[16/10] w-full object-cover object-top"
            decoding="async"
          />
          <div className="hero-scan absolute inset-0" aria-hidden="true" />
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase text-electric">Featured build</p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-white">
            {mainProject.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Commerce, cart, checkout, API-ready flow.
          </p>
        </div>
      </div>

      <HeroMetricStrip className="absolute bottom-8 left-6 right-6" />
    </motion.div>
  );
}

function MobilePulseDeck() {
  return (
    <motion.div
      className="relative mx-auto mt-10 w-full min-w-0 max-w-sm lg:hidden"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Mobile portfolio dashboard"
    >
      <div className="mobile-dashboard relative overflow-hidden rounded-[2rem] border border-white/12 bg-carbon/95 p-4 shadow-glow">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-mint to-transparent" />
        <div className="flex items-center gap-3">
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="size-14 rounded-2xl border border-white/15 object-cover object-[50%_32%]"
            width="56"
            height="56"
            decoding="async"
          />
          <div>
            <p className="text-xs font-semibold uppercase text-mint">Full-stack developer</p>
            <p className="mt-1 font-display text-xl font-semibold text-white">{profile.displayName}</p>
          </div>
        </div>

        <MobileCapabilityPanel />
        <HeroMetricStrip className="mt-4" />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-16 lg:pt-16">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:72px_72px]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-electric/14 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="min-w-0">
          <motion.p
            className="mb-5 inline-flex max-w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-left text-sm font-medium leading-6 text-electric backdrop-blur-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Available for frontend, React, and full-stack opportunities in Germany
          </motion.p>
          <motion.h1
            className="max-w-4xl break-words font-display text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-white via-electric to-mint bg-clip-text text-transparent">
              {profile.displayName}
            </span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl break-words font-display text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {profile.headline}
          </motion.p>
          <motion.p
            className="mt-5 max-w-2xl break-words text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            Passionate software developer specializing in React.js, modern JavaScript, scalable frontend architecture, API integration, and full-stack web development.
          </motion.p>

          <MobilePulseDeck />
          <HeroActions />
          <TechRail />
        </div>

        <DesktopCommandDeck />
      </div>
    </section>
  );
}
