import NextLink from 'next/link';

import { cn } from '@/_shared/utils/cn';

import { ILinkModel } from './Link.model';
import { linkStyles } from './Link.styles';
import { useLinkViewModel } from './Link.viewmodel';

export const Link = (props: ILinkModel) => {
  const { children, className, variant, ...rest } = useLinkViewModel(props);

  return (
    <NextLink className={cn(linkStyles({ variant }), className)} {...rest}>
      {children}
    </NextLink>
  );
};
