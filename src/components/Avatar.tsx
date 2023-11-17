import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import React from 'react';



export interface Props {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    image: string;
}

export function Avatar({ image = './assets/userIcon', size = 'md',} : Props ) {

    return(
        <img src = {image} className={clsx(
            'rounded-full',
            {
                'w-[45px] h-[45px]': size == 'xs',
                'w-[70px] h-[70px]': size == 'sm',
                'w-[100px] h-[100px]': size == 'md',
                'w-[130px] h-[130px]': size == 'lg',
                'w-[150px] h-[150px]': size == 'xl',
            }
        )} ></img>   
    )
}