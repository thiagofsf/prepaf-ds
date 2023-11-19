import { clsx } from "clsx";

import { Text } from "./Text";

export interface Props {
    title?: string;
    starts?: String;
    ends?: String;
    type?: 'treino' | 'jogo' | 'recuperacao' | 'avaliacao' | 'main' ;
    onclick?: (e:any) => void;
}

export function CalendarEvent({ title = 'título', starts = '08:00', ends = '10:00', type = 'treino', onclick } : Props ) {

    return(
        <div onClick = {onclick} className={clsx(
            'py-1 px-2 font-bold text-md rounded transition-colors w-full',
            {
                'bg-prepaf-orange hover:bg-prepaf-orange/80': type == 'main',
                'bg-treino hover:bg-treino/80': type == 'treino',
                'bg-jogo hover:bg-jogo/80': type == 'jogo',
                'bg-avaliacao hover:bg-avaliacao/80': type == 'avaliacao',
                'bg-recuperacao hover:bg-recuperacao/80': type == 'recuperacao',
                'text-white': type == 'avaliacao',
                'text-black-1000' : type == 'treino' || 'jogo' || 'recuperacao' || 'main',
            }
        )}>
            <Text size = "sm" weight="medium" align="left"><p className="m-0">{title}</p></Text>
            <Text size = "xs" weight="normal" align="left"><p className="m-0">{starts} - {ends}</p></Text>
        </div>
    )
}