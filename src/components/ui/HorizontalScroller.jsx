import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function HorizontalScroller({ as = 'div', className = '', children, label }) {
  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({ left: false, right: false });
  const ScrollElement = as;

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return undefined;

    const updateScrollState = () => {
      const next = {
        left: element.scrollLeft > 1,
        right: element.scrollLeft + element.clientWidth < element.scrollWidth - 1,
      };
      setScrollState((current) => current.left === next.left && current.right === next.right ? current : next);
    };

    updateScrollState();
    element.addEventListener('scroll', updateScrollState, { passive: true });
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateScrollState);
    resizeObserver?.observe(element);

    return () => {
      element.removeEventListener('scroll', updateScrollState);
      resizeObserver?.disconnect();
    };
  }, []);

  const scroll = (direction) => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({ left: direction * Math.max(element.clientWidth * 0.82, 220), behavior: 'smooth' });
  };

  if (!ScrollElement) return null;

  return (
    <div className="horizontal-scroller">
      <ScrollElement
        ref={scrollRef}
        className={className}
        aria-label={label}
        tabIndex={0}
      >
        {children}
      </ScrollElement>
      {(scrollState.left || scrollState.right) && (
        <div className="horizontal-scroll-controls" aria-label={`${label} scrolling controls`}>
          <span>Scroll to explore</span>
          <button type="button" aria-label={`Scroll ${label} left`} disabled={!scrollState.left} onClick={() => scroll(-1)}>
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button type="button" aria-label={`Scroll ${label} right`} disabled={!scrollState.right} onClick={() => scroll(1)}>
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
