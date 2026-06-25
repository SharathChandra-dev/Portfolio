import { FiArrowUpRight } from 'react-icons/fi';

export default function ExternalButton({ href, children, variant = 'secondary', download, disabled = false }) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric';
  const variants = {
    primary:
      'bg-white text-ink shadow-glow hover:-translate-y-0.5 hover:bg-frost disabled:translate-y-0 disabled:bg-white/20 disabled:text-slate-400',
    secondary:
      'border border-white/15 bg-white/8 text-white hover:-translate-y-0.5 hover:border-electric/50 hover:bg-white/12 disabled:translate-y-0 disabled:border-white/10 disabled:text-slate-500',
    accent:
      'bg-gradient-to-r from-electric to-pulse text-white shadow-violet hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50',
  };

  if (disabled) {
    return (
      <span className={`${base} ${variants[variant]} cursor-not-allowed`} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      className={`${base} ${variants[variant]}`}
      href={href}
      download={download}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
      {!download && <FiArrowUpRight aria-hidden="true" />}
    </a>
  );
}
