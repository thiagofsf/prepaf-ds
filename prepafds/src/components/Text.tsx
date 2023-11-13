import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' ;
    align?: 'center' | 'right' | 'left' | 'justify' ;
    weight?: 'normal' | 'medium' | 'bold';
    type?: 'default' | 'treino' | 'jogo' | 'avaliacao' | 'recuperacao' | 'green' | 'red' | 'gray';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', align = 'right', weight = 'normal', type='default', children, asChild } : TextProps ) {

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
                'font-medium': weight == 'medium',
                'font-bold': weight == 'bold',
                'text-black-1000': type == 'default',
                'text-green-400': type == 'green',
                'text-red-800': type == 'red',
                'text-treino': type == 'treino',
                'text-jogo': type == 'jogo',
                'text-avaliacao': type == 'avaliacao',
                'text-recuperacao': type == 'recuperacao',
                'text-gray-600': type == 'gray',
            
            }
        )}>
            {children}
        </Comp>
    )
}