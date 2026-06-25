import { Suspense, lazy, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ui/ScrollProgress.jsx';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage.jsx'));

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timeoutId = window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 90);
      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}

function RouteLoader() {
  return (
    <div className="grid min-h-[55vh] place-items-center px-6 text-center">
      <div className="glass-card max-w-sm p-6">
        <div className="mx-auto mb-4 h-2 w-36 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-shimmer bg-gradient-to-r from-electric via-pulse to-mint" />
        </div>
        <p className="text-sm text-slate-300">Preparing Sharath&apos;s portfolio</p>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="site-shell min-h-screen bg-hero-radial text-frost">
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Suspense fallback={<RouteLoader />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/case-study/:slug" element={<CaseStudyPage />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
