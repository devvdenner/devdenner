import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface IButtonModel extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
}
