import { clsx } from "clsx";

export interface Props {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    image?: string;
    link?: string;
    noLink?: boolean;
}

export function LogoImg({ image = './assets/logo.png', size = 'md', link, noLink} : Props ) {

    const Comp = (noLink)?('div'):('a');
    return(
        <Comp href={link} >            
            <img src = {image} className={clsx(
                'w-full',
                {
                    'max-w-[45px]': size == 'xs',
                    'max-w-[70px]': size == 'sm',
                    'max-w-[100px]': size == 'md',
                    'max-w-[150px]': size == 'lg',
                    'max-w-[200px]': size == 'xl',
                }
            )} ></img>
        </Comp> 
    )
}