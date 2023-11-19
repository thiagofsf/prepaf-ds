import { ReactNode } from 'react';
import { clsx } from "clsx";

export interface Props {
    align?: 'right' | 'left' | 'center';
    children?: ReactNode;
    className?: string
}

export function ContainerPage({children, align = 'left', className = ''}: Props) {

    return (
        <div className={clsx(
            'w-full max-w-[1200px] p-1 flex',
            {
                'justify-center': align == 'center',
                'justify-start': align == 'left',
                'justify-end': align == 'right',
            },
            className
        )}>
            {children}
        </div>
    );
}
