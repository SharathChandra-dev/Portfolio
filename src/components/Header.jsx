import { useState } from 'react';
import { FiDownload, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { profile, navItems } from '../data/portfolio.js';
import ExternalButton from './ui/ExternalButton.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3" aria-label="Sharath Chandra home">
          <img
            src={profile.photo}
            alt=""
            className="size-11 rounded-2xl border border-white/15 object-cover object-[50%_30%] shadow-glow"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold text-white">{profile.displayName}</span>
            <span className="block text-xs text-slate-400">React & Full Stack</span>
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

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric lg:hidden"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-carbon/95 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <ExternalButton href={profile.resume} download variant="secondary">
                <FiDownload aria-hidden="true" />
                Download Resume
              </ExternalButton>
              <ExternalButton href="/#contact" variant="accent">
                <FiMail aria-hidden="true" />
                Contact Me
              </ExternalButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
