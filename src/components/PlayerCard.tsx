import { ReactNode } from 'react';
import { clsx } from "clsx";
import { Avatar } from './Avatar';
import {Text} from './Text';
import { Slot } from "@radix-ui/react-slot";

export interface Props {
    noPhoto?: boolean;
    photo?: string;
    align: 'right' | 'left' | 'center' | 'justify';
    children: ReactNode;
    asChild?: boolean;
    title?:string;
    noTitle:boolean;
}

export function PlayerCard({children, photo = './assets/userIcon.svg', align = 'center', asChild, noPhoto, title, noTitle}: Props) {

    return (
        <div className="w-full transition-all rounded overflow-hidden">
            {noPhoto ? <></>:(
            <div className="flex items-center justify-center py-6 bg-prepaf-orange">
                <Avatar image = {photo} size='lg'></Avatar>
            </div>)}
            <div className="flex flex-col items-center p-4 md:pt-10 md:pb-7 justify-center gap-4 md:gap-11 bg-white ">
                {noTitle ? <></> : (
                    <Text size='md' align={align} ><b>{title}</b></Text>
                )}
                <div className={clsx(
                    {   
                        'text-center': align == 'center',
                        'text-right': align == 'right',
                        'text-left': align == 'left',
                        'text-justify': align == 'justify'
                    }
                )}>
                    {asChild ? (<Slot>{children}</Slot>) : (<Text size='sm' align={align}>{children}</Text>) }
                    
                </div>
            </div>
        </div>
    );
}
