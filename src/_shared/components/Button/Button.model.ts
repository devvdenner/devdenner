import { LinkProps } from 'next/link';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface BaseButtonProps {
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type IButtonModel = ButtonAsButton | ButtonAsLink;
