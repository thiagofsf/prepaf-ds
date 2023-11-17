import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

import { IoCaretForward } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { IoCaretUp } from "react-icons/io5";

export interface ButtonNavProps {
    type?: 'main' | 'confirm' | 'critical';
    size?: 'sm' | 'md' | 'lg' | 'auto' | 'full';
    direction?:'up' | 'down' | 'forward' | 'back' ;
    onclick?: () => void;
}

export function ButtonNav({ type= 'main', size = 'auto', direction = 'forward', onclick } : ButtonNavProps ) {

    return(
        <button onClick = {onclick} className={clsx(
            'py-2 px-2 font-bold text-white text-2xl rounded transition-colors focus:ring-2 ring-black-800',
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
            {(direction == 'up')?(<IoCaretUp />):(
                (direction == 'down')?(<IoCaretDown />):(
                    (direction == 'forward')?(<IoCaretForward />):(<IoCaretBack />)
                )
            )}
        </button>
    )
}