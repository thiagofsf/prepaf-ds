import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' ;
    align?: 'center' | 'right' | 'left' | 'justify' ;
    weight?: 'normal' | 'medium' | 'bold';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({ size = 'md', align = 'right', weight = 'normal', children, asChild, className } : TextProps ) {

    const Comp = asChild ? Slot : 'span'
    return(
        <Comp className={clsx(
             'font-sans',
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
                'font-semibold': weight == 'medium',
                'font-bold': weight == 'bold',
            }, className
        )}>
            {children}
        </Comp>
    )
}