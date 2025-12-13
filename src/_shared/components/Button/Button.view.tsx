import Link from 'next/link';

import { cn } from '@/_shared/utils/cn';

import { IButtonModel } from './Button.model';
import { buttonVariants } from './Button.styles';
import { useButtonViewModel } from './Button.viewmodel';

export const Button = (props: IButtonModel) => {
  const { variant, shape, size, iconColor, children, href, className, ...rest } =
    useButtonViewModel(props);

  const classes = cn(buttonVariants({ variant, shape, size, iconColor }), className);

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...(rest as Omit<React.ComponentProps<typeof Link>, 'href'>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
