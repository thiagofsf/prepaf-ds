import { clsx } from "clsx";
import { IoMdArrowDropdown } from "react-icons/io";
import { Avatar } from "./Avatar";
import { Text } from "./Text";

export interface ButtonProps {
    image?: string;
    size?: 'sm' | 'md' | 'lg' | 'auto' | 'full';
    name?: string;
}

export function AvatarButton({ size = 'auto', name = 'User', image = './assets/userIcon.svg'} : ButtonProps ) {

    const Comp = 'button'
    return(
        <Comp className={clsx(
            'flex justify-center items-center gap-2 px-3 font-bold text-white text-md rounded transition-colors focus:bg-gray-50',
            {
                'w-full max-w-[200px]': size == 'sm',
                'w-full max-w-[400px]': size == 'md',
                'w-full max-w-[600px]': size == 'lg',
                'w-full': size == 'full',
            }
        )}>
            <Text size="sm" weight="medium"><p className="font-semibold">{name}</p></Text>
            <Avatar image={image} size="xs"></Avatar>
            <IoMdArrowDropdown className="text-black-1000"/>
        </Comp>
    )
}