'use client';

import { cn } from '@/_shared/utils/cn';

import { TypeWriterProps } from './TypeWriter.model';
import { typeWriterStyles } from './TypeWriter.styles';
import { useTypeWriterViewModel } from './TypeWriter.viewmodel';

export const TypeWriter = (props: TypeWriterProps) => {
  const { displayText, className } = useTypeWriterViewModel(props);

  return (
    <span className={cn(typeWriterStyles.container(), className)}>
      <span>{displayText}</span>
      <span className={cn(typeWriterStyles.cursor())}>|</span>
    </span>
  );
};
