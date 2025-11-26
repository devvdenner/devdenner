import React from 'react';
import { cn } from '@/_shared/utils/cn';
import { ISectionModel } from './Section.model';
import { useSectionViewModel } from './Section.viewmodel';
import { sectionVariants } from './Section.styles';

export const Section = (props: ISectionModel) => {
    const { children, id, className, ...rest } = useSectionViewModel(props);

    return (
        <section id={id} className={cn(sectionVariants(), className)} {...rest}>
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    );
};
