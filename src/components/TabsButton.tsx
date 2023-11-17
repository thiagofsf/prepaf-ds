import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode, useState } from "react";
import {Text} from './Text';

export interface Props {
    links: string;
    initselected: string;
}

export function TabsButton({links = '[{"label":"Tab1", "id":"tab1"}, {"label":"Tab2", "id":"tab2"}, {"label":"Tab3", "id":"tab3"}]', initselected = 'tab1'} : Props ) {

    const [selected, setSelected] = useState(initselected);
    let linksparsed = JSON.parse(links);

    return(
        <div className="flex mx-1 rounded bg-white w-fit">
            {linksparsed.map((link:{label: string; id: string;})=>(
                <button
                    className={clsx(
                        'flex w-fit items-center rounded justify-center h-10 p-3 group transition-colors',
                        {
                            'bg-prepaf-orange hover:bg-prepaf-orange text-white': selected == link.id,
                            'bg-transparent hover:text-prepaf-orange': selected != link.id,
                        }   
                    )} id = {link.id} key={link.id}
                    onClick={() => setSelected(link.id)}
                >
                    <p className="text-sm font-bold">{link.label}</p>
                </button>
            ))}
        </div>
    )
}