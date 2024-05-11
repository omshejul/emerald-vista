"use client"
import { useEffect, useRef } from 'react';
import useOnScreen from '../useOnScreen/useOnScreen';


// Define an interface for component props
interface AnimatedNumberProps {
  start: number;
  end: number;
  duration: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ start, end, duration }) => {
  const ref = useRef<HTMLSpanElement>(null);
const isVisible = useOnScreen({ ref });

  useEffect(() => {
    if (isVisible && ref.current) {
      animateValue(ref.current, start, end, duration);
    }
  }, [isVisible, start, end, duration]);

  return <span ref={ref}>{start}</span>;
};

const animateValue = (element: HTMLElement, start: number, end: number, duration: number): void => {
  let startTimestamp: number | null = null;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default AnimatedNumber;
