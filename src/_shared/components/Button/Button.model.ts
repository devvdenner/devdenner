import { LinkProps } from 'next/link';
import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'whatsapp'
  | 'outlinePrimary'
  | 'icon';
export type ButtonShape = 'default' | 'rounded';
export type ButtonSize = 'default' | 'icon';
export type ButtonIconColor = 'default' | 'github' | 'linkedin' | 'whatsapp';

interface BaseButtonProps {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  iconColor?: ButtonIconColor;
  children?: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type IButtonModel = ButtonAsButton | ButtonAsLink;
