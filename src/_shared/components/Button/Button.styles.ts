import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    "flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-[#ff5252] focus:ring-primary",
                secondary: "bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500",
                outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-primary",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
