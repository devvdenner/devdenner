import React from 'react';

import { cn } from '@/_shared/utils/cn';

import { IButtonModel } from './Button.model';
import { buttonVariants } from './Button.styles';
import { useButtonViewModel } from './Button.viewmodel';


export const Button = (props: IButtonModel) => {
    const { variant, className, children, ...rest } = useButtonViewModel(props);

    return (
        <button
            className={cn(buttonVariants({ variant }), className)}
            {...rest}
        >
            {children}
        </button>
    );
};
