import { RefObject, useEffect, useState } from 'react';

const useMousePosition = (buttonRef: RefObject<HTMLAnchorElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!buttonRef?.current) return;
    const button = buttonRef.current;

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.offsetX, y: ev.offsetY });
    };

    button.addEventListener('mousemove', updateMousePosition);

    return () => {
      button.removeEventListener('mousemove', updateMousePosition);
    };
  }, [buttonRef]);

  return mousePosition;
};

export default useMousePosition;