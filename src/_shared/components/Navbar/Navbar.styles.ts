import { cva } from 'class-variance-authority';

export const navbarVariants = cva(
    "fixed top-0 w-full z-50 transition-all duration-300",
    {
        variants: {
            scrolled: {
                true: "bg-background/90 backdrop-blur-md py-4 shadow-lg",
                false: "bg-transparent py-6"
            }
        },
        defaultVariants: {
            scrolled: false
        }
    }
);

export const mobileMenuVariants = cva(
    "absolute top-full left-0 w-full bg-surface border-t border-slate-700 md:hidden flex flex-col items-center py-6 space-y-4 shadow-2xl"
);
