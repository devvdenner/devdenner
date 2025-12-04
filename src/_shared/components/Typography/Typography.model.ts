import { VariantProps } from 'class-variance-authority';
import React from 'react';

import { typographyVariants } from './Typography.styles';

export interface ITypographyModel
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}
