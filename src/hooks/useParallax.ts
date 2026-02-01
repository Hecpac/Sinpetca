import { useEffect, useState, type RefObject } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

type ParallaxOptions = {
  distance?: number;
  mobileDistance?: number;
  offset?: ScrollOffset;
};

export function useParallax(
  targetRef: RefObject<HTMLElement | null>,
  {
    distance = 40,
    mobileDistance = 14,
    offset = ['start end', 'end start'] as ScrollOffset,
  }: ParallaxOptions = {}
) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  const appliedDistance = prefersReducedMotion ? 0 : isMobile ? mobileDistance : distance;

  return useTransform(scrollYProgress, [0, 1], [-appliedDistance, appliedDistance]);
}
