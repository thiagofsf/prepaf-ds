import { clsx } from "clsx";
import { ReactNode } from "react";

import { Text } from "./Text";

export interface Props {
    day?: number;
    children?: ReactNode;
    onclick?: () => void;
}

export function CalendarDayContainer({ day = 1, children, onclick } : Props ) {

    return(
        <div onClick = {onclick} className={clsx(
            'py-2 px-2 font-bold transition-all bg-gray-100 hover:bg-yellow-200 w-full max-w-[200px] flex items-center flex-col min-h-[200px] z-40',
        )}>
            <Text size = "md" weight="medium" align="center"><p className="pb-2">{day}</p></Text>
            {children}
        </div>
    )
}