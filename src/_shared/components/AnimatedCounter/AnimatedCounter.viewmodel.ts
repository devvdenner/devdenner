import { useEffect, useRef } from 'react';

import { useInView, useMotionValue, useSpring, useTransform } from '@/_shared/adapters/motion';

import { AnimatedCounterProps } from './AnimatedCounter.model';

export const useAnimatedCounterViewModel = (props: AnimatedCounterProps) => {
  const { value, duration = 2 } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return {
    ref,
    displayValue,
    suffix: props.suffix,
    className: props.className,
  };
};
