import React from 'react';

import { cn } from '@/_shared/utils/cn';

import { ISectionModel } from './Section.model';
import { sectionVariants } from './Section.styles';
import { useSectionViewModel } from './Section.viewmodel';

export const Section = (props: ISectionModel) => {
  const { children, id, className, ...rest } = useSectionViewModel(props);

  return (
    <section id={id} className={cn(sectionVariants(), className)} {...rest}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
};
