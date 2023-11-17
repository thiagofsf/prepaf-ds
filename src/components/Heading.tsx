import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg' ;
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild } : HeadingProps ) {

    const Comp = asChild ? Slot : 'h2'
    return(
        <Comp className={clsx(
            'text-black-1000 font-bold font-sans',
            {
                'text-xl': size == 'sm',
                'text-2xl': size == 'md',
                'text-3xl': size == 'lg',
            }
        )}>
            {children}
        </Comp>
    )
}