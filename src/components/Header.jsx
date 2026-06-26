import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { profile, navItems } from '../data/portfolio.js';
import ExternalButton from './ui/ExternalButton.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-[60] border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3" aria-label="Sharath Chandra home">
          <img
            src={profile.photo}
            alt=""
            className="size-11 rounded-2xl border border-white/15 object-cover object-[50%_30%] shadow-glow"
            width="44"
            height="44"
            decoding="async"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold text-white">{profile.displayName}</span>
            <span className="block text-xs text-slate-400">Full Stack & Backend</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ExternalButton href={profile.resume} download variant="secondary">
            <FiDownload aria-hidden="true" />
            Resume
          </ExternalButton>
          <ExternalButton href="/#contact" variant="accent">
            <FiMail aria-hidden="true" />
            Contact
          </ExternalButton>
        </div>

        <motion.button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric lg:hidden"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 360, damping: 24 }}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-panel fixed inset-x-0 top-[73px] z-50 h-[calc(100vh-73px)] overflow-y-auto border-t border-white/10 px-4 py-5 shadow-2xl sm:px-5 lg:hidden"
            initial={{ opacity: 0, scale: 0.92, y: -18, transformOrigin: 'top right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -14 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.nav
              className="relative mx-auto grid max-w-7xl gap-2"
              aria-label="Mobile navigation"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.045, delayChildren: 0.04 } },
              }}
            >
              <motion.div
                className="mb-3 rounded-[1.4rem] border border-electric/25 bg-carbon/95 p-4 shadow-glow"
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
              >
                <p className="text-xs font-semibold uppercase text-mint">Navigation</p>
                <p className="mt-1 font-display text-xl font-semibold text-white">Explore Sharath&apos;s work</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Full-stack projects, backend experience, activity, and contact details.</p>
              </motion.div>
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={closeMenu}
                  className="mobile-menu-link rounded-2xl border px-4 py-4 text-base font-semibold text-slate-100 transition"
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileTap={{ scale: 1.04, rotate: -1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-3 grid gap-3 sm:grid-cols-2"
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
              >
                <ExternalButton href={profile.resume} download variant="secondary" onClick={closeMenu}>
                  <FiDownload aria-hidden="true" />
                  Download Resume
                </ExternalButton>
                <ExternalButton href="/#contact" variant="accent" onClick={closeMenu}>
                  <FiMail aria-hidden="true" />
                  Contact Me
                </ExternalButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
