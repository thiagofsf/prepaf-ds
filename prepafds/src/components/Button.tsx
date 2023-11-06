import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
    type?: 'main' | 'confirm' | 'critical';
    size?: 'sm' | 'md' | 'lg' | 'auto' | 'full';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ type= 'main', size = 'full', children, asChild } : ButtonProps ) {

    const Comp = asChild ? Slot : 'button'
    return(
        <Comp className={clsx(
            'py-4 px-3 font-bold text-white text-md rounded transition-colors focus:ring-2 ring-black-800',
            {
                'bg-prepaf-orange': type == 'main',
                'hover:bg-orange-200': type == 'main',
                'bg-green-400': type == 'confirm',
                'hover:bg-green-300': type == 'confirm',
                'bg-red-800': type == 'critical',
                'hover:bg-red-600': type == 'critical',
                'w-full max-w-[200px]': size == 'sm',
                'w-full max-w-[400px]': size == 'md',
                'w-full max-w-[600px]': size == 'lg',
                'w-full': size == 'full',
            }
        )}>
            {children}
        </Comp>
    )
}