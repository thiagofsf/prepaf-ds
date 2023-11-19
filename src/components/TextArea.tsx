import { clsx } from "clsx";
import { ReactNode, TextareaHTMLAttributes } from "react";

export interface TextAreaRootProps {
    children?: ReactNode;
    color?: 'default' | 'gray';
}

function TextAreaRoot({color = 'default', children}:TextAreaRootProps){
    return(
        <div className={clsx(
            'flex items-center gap-3 rounded font-medium py-2 px-3 mb-2 w-full border-gray-200 focus-within:ring-2 ring-prepaf-orange',
            {
                'bg-white': color == 'default',
                'bg-gray-100': color == 'gray',
                'border-gray-200': color == 'gray',
            }
        )}>
            {children}
        </div>
    )
}


export interface TextAreaInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

function TextAreaInput(props:TextAreaInputProps){
    return(
        <textarea className="bg-transparent flex-grow text-md placeholder:text-gray-500 text-black-800 outline-none" {...props}></textarea>
    )

}

export const TextArea = {
    Root:TextAreaRoot,
    Input:TextAreaInput,
}