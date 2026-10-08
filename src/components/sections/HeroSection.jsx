import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { heroTech, profile } from '../../data/portfolio.js';
import ExternalButton from '../ui/ExternalButton.jsx';

export default function HeroSection() {
  return (
    <section className="hero-editorial px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Software developer · Munich, Germany
          </motion.p>
          <motion.h1
            className="hero-title mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            Building thoughtful digital products, <span>from interface to API.</span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.14 }}
          >
            I&apos;m {profile.displayName}, a full-stack software developer and M.Sc. Applied Computer Science student. I build responsive React experiences and reliable backend workflows, with 2+ years of professional experience.
          </motion.p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ExternalButton href="#projects" variant="primary"><FiArrowDown aria-hidden="true" />Explore my work</ExternalButton>
            <ExternalButton href={profile.resume} download={profile.resumeDownloadName} variant="secondary"><FiDownload aria-hidden="true" />Download resume</ExternalButton>
            <ExternalButton href="#contact" variant="accent"><FiMail aria-hidden="true" />Get in touch</ExternalButton>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><FiMapPin aria-hidden="true" />Open to opportunities in Germany</span>
            <span className="hidden h-1 w-1 rounded-full bg-mint sm:block" aria-hidden="true" />
            <span>{heroTech.join(' · ')}</span>
          </div>
        </div>
        <div className="hero-profile-card">
          <img src={profile.photo} alt={profile.fullName} width="88" height="88" />
          <div>
            <p className="text-sm font-semibold text-white">{profile.displayName}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">React · Full stack · Product minded</p>
          </div>
          <span className="hero-profile-status" aria-label="Available for opportunities" />
        </div>
      </div>
    </section>
  );
}
