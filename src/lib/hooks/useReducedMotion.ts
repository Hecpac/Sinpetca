/**
 * Custom hook to detect user's reduced motion preference.
 * Uses useSyncExternalStore to avoid effect-driven state updates.
 */

import { useSyncExternalStore } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const getServerSnapshot = () => false;

const getSnapshot = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
};

const subscribe = (callback: () => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  const handleChange = () => callback();

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }

  mediaQuery.addListener(handleChange);
  return () => mediaQuery.removeListener(handleChange);
};

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useReducedMotion;
