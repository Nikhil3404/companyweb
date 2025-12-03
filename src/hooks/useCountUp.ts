import { useEffect, useState, useRef } from 'react';

export const useCountUp = (end: number, duration: number = 2000, hasStarted: boolean = false) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!hasStarted) {
      if (hasAnimatedRef.current) {
        setCount(0);
        hasAnimatedRef.current = false;
      }
      return;
    }

    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    startTimeRef.current = null;
    setCount(0);

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return count;
};
