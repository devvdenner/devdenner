import { useCallback, useEffect, useRef, useState } from 'react';

import { TypeWriterProps } from './TypeWriter.model';

type Phase = 'typing' | 'pausing' | 'deleting';

export const useTypeWriterViewModel = (props: TypeWriterProps) => {
  const {
    texts,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
  } = props;

  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const textIndex = useRef(0);
  const charIndex = useRef(0);

  const tick = useCallback(() => {
    const currentText = texts[textIndex.current];

    if (phase === 'typing') {
      if (charIndex.current < currentText.length) {
        charIndex.current += 1;
        setDisplayText(currentText.slice(0, charIndex.current));
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'deleting') {
      if (charIndex.current > 0) {
        charIndex.current -= 1;
        setDisplayText(currentText.slice(0, charIndex.current));
      } else {
        textIndex.current = (textIndex.current + 1) % texts.length;
        setPhase('typing');
      }
    }
  }, [phase, texts]);

  useEffect(() => {
    if (phase === 'pausing') {
      const timeout = setTimeout(() => setPhase('deleting'), pauseDuration);
      return () => clearTimeout(timeout);
    }

    const speed = phase === 'typing' ? typingSpeed : deletingSpeed;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [phase, tick, typingSpeed, deletingSpeed, pauseDuration, displayText]);

  return {
    displayText,
    className: props.className,
  };
};
