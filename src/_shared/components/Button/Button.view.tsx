import Link from 'next/link';

import { cn } from '@/_shared/utils/cn';

import { IButtonModel } from './Button.model';
import { buttonVariants } from './Button.styles';
import { useButtonViewModel } from './Button.viewmodel';

export const Button = (props: IButtonModel) => {
  const { variant, children, href, ...rest } = useButtonViewModel(props);

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant }))}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...(rest as Omit<React.ComponentProps<typeof Link>, 'href'>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant }))}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
