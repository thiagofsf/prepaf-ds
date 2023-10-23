import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
    type?: 'main' | 'confirm' | 'critical';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ type= 'main', children, asChild } : ButtonProps ) {

    const Comp = asChild ? Slot : 'button'
    return(
        <Comp className={clsx(
            'py-4 px-3 font-bold text-white text-md w-full transition-colors focus:ring-2 ring-black-800',
            {
                'bg-prepaf-orange': type == 'main',
                'hover:bg-orange-200': type == 'main',
                'bg-green-400': type == 'confirm',
                'hover:bg-green-300': type == 'confirm',
                'bg-red-800': type == 'critical',
                'hover:bg-red-600': type == 'critical',
            }
        )}>
            {children}
        </Comp>
    )
}