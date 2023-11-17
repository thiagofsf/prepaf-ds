import { ReactNode } from 'react';
import { clsx } from "clsx";
import {Text} from './Text';
import { Slot } from "@radix-ui/react-slot";

export interface Props {
    align: 'right' | 'left' | 'center' | 'justify';
    children: ReactNode;
    asChild?: boolean;
}

export function Footer({children, align = 'left', asChild}: Props) {

    return (
        <div className={clsx(
            'w-full bg-gray-200 p-5 flex',
            {
                'justify-center': align == 'center',
                'justify-start': align == 'left',
                'justify-end': align == 'right',
            }
        )}>
            <div className={clsx(
                {   
                    'text-center': align == 'center',
                    'text-right': align == 'right',
                    'text-left': align == 'left',
                    'text-justify': align == 'justify',
                }
            )}>
                {asChild ? (<Slot>{children}</Slot>) : (<Text size='sm' align={align}>{children}</Text>) }
                
            </div>
        </div>
    );
}
