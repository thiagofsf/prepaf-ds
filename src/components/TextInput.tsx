import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { IoMdSearch } from "react-icons/io";

export interface TextInputRootProps {
    children?: ReactNode;
    color?: 'default' | 'gray';
    type?: 'default' | 'search' ;
}

function TextInputRoot({color = 'default', type='default', children}:TextInputRootProps){
    return(
        <div className={clsx(
            'flex items-center gap-3 rounded font-medium py-2 px-3  w-full border-gray-200 focus-within:ring-2 ring-prepaf-orange',
            {
                'bg-white': color == 'default',
                'bg-gray-100': color == 'gray',
                'border-gray-200': color == 'gray',
            }
        )}>
            {(type == 'search')?(<IoMdSearch className="w-6 h-6 text-gray-500"/>):(<></>)}
            {children}
        </div>
    )
}

export interface TextInputIconProps {
    children?: ReactNode;
}
function TextInputIcon( props: TextInputIconProps){
    return(
        <Slot className="w-6 h-6 text-gray-500">{props.children}</Slot>
    )
}

//function TextInputIcon {(type == 'search')?(<IoMdSearch />):(<></>)}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props:TextInputInputProps){
    return(
        <input className="bg-transparent flex-grow text-md placeholder:text-gray-500 text-black-800 outline-none" {...props}  />
    )

}

export const TextInput = {
    Root:TextInputRoot,
    Input:TextInputInput,
    Icon: TextInputIcon
}