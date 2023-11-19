import { clsx } from "clsx";
import { ReactNode } from "react";

import { Text } from "./Text";

export interface Props {
    day?: number;
    children?: ReactNode;
    disabled?: boolean;
    onclick?: () => void;
}

export function CalendarDayContainer({ day = 1, children, onclick, disabled} : Props ) {
    let clickfunction;
    if(!disabled){
        clickfunction = onclick;
    } else{
        clickfunction = undefined;
    }
    return(
        <div onClick = {clickfunction} className={clsx(
            'py-2 px-2 font-bold transition-all bg-gray-100 w-full max-w-[200px] flex items-center flex-col min-h-[200px]',
            {
                'hover:bg-yellow-200': !disabled == true,
                'text-gray-600': disabled == true,
            }
        )}>
            <Text size = "md" weight="medium" align="center" className="pb-2">{day}</Text>
            {children}
        </div>
    )
}