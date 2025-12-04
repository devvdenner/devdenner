import { VariantProps } from 'class-variance-authority';
import { ElementType, HTMLAttributes } from 'react';

import { typographyVariants } from './Typography.styles';

export interface ITypographyModel
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: ElementType;
}
