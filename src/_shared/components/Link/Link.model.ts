import { LinkProps } from 'next/link';
import React from 'react';

export type LinkVariant = 'default' | 'nav' | 'logo';

export interface ILinkModel
  extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: React.ReactNode;
  className?: string;
  variant?: LinkVariant;
}
