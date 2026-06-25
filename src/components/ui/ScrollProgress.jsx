import { useScrollProgress } from '../../hooks/useScrollProgress.js';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-electric via-pulse to-mint shadow-glow transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
