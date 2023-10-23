import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
}

export function TextInput(props: TextInputProps ) {

    return(
        <input className={clsx(
            'rounded font-medium py-4 px-3 text-md w-full bg-gray-100 outline-none border-gray-200 placeholder:text-gray-500 text-black-800 focus:ring-2 ring-prepaf-orange',
        
        )}
         {...props}   
        />
    )
}