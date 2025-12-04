import { cn } from '@/_shared/utils/cn';

import { IButtonModel } from './Button.model';
import { buttonVariants } from './Button.styles';
import { useButtonViewModel } from './Button.viewmodel';
import Link from 'next/link';

export const Button = (props: IButtonModel) => {
  const { variant, children, href, ...rest } = useButtonViewModel(props);

  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant }))}
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
