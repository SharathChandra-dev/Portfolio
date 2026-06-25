import { FiArrowUp, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { navItems, profile } from '../data/portfolio.js';
import ExternalButton from './ui/ExternalButton.jsx';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={profile.photo}
              alt=""
              className="size-12 rounded-2xl border border-white/15 object-cover object-[50%_30%]"
              loading="lazy"
            />
            <div>
              <p className="font-display text-xl font-semibold text-white">{profile.fullName}</p>
              <p className="text-sm text-slate-400">{profile.headline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">{profile.tagline}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <FiMapPin aria-hidden="true" />
            {profile.location}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-white">Quick Links</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-white">Social Media</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin aria-hidden="true" />
            </a>
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub aria-hidden="true" />
            </a>
            <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email Sharath">
              <FiMail aria-hidden="true" />
            </a>
          </div>
          <div className="mt-5">
            <ExternalButton href={profile.resume} download variant="secondary">
              <FiDownload aria-hidden="true" />
              Resume Download
            </ExternalButton>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>Copyright {currentYear} Sharath Chandra. All rights reserved.</p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-slate-300 transition hover:border-electric/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FiArrowUp aria-hidden="true" />
            Back To Top
          </button>
        </div>
      </div>
    </footer>
  );
}
