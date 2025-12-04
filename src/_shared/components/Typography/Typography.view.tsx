import { forwardRef } from 'react';

import { cn } from '@/_shared/utils/cn';

import { ITypographyModel } from './Typography.model';
import { typographyVariants } from './Typography.styles';
import { useTypographyViewModel } from './Typography.viewmodel';

export const Typography = forwardRef<HTMLElement, ITypographyModel>((props, ref) => {
  const { Component, variant, rest } = useTypographyViewModel(props);
  const { className, children, ...otherProps } = rest;

  return (
    <Component
      ref={ref}
      className={cn(typographyVariants({ variant }), className)}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';
