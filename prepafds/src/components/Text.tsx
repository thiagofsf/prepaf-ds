import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' ;
    align?: 'center' | 'right' | 'left' | 'justify' ;
    weight?: 'normal' | 'medium' | 'bold';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', align = 'right', weight = 'normal', children, asChild } : TextProps ) {

    const Comp = asChild ? Slot : 'span'
    return(
        <Comp className={clsx(
            'text-black-1000 font-sans',
            {
                'text-xs': size == 'xs',
                'text-sm': size == 'sm',
                'text-md': size == 'md',
                'text-lg': size == 'lg',
                'text-center': align == 'center',
                'text-right': align == 'right',
                'text-left': align == 'left',
                'text-justify': align == 'justify',
                'font-normal': weight == 'normal',
                'font-medium': weight == 'medium',
                'font-bold': weight == 'bold',
            }
        )}>
            {children}
        </Comp>
    )
}