import { useIsomorphicLayoutEffect } from 'framer-motion';
import { useState } from 'react';

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === 'undefined';

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {},
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER) {
      return;
    }

    const matchMedia = window.matchMedia(query);

    // Set the initial state
    setMatches(matchMedia.matches);

    // Add the event listener
    matchMedia.addEventListener('change', handleChange);

    // Clean up the event listener
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}