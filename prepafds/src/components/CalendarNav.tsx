import { ButtonNav } from "./ButtonNav";
import { Text } from "./Text";

export interface Props {
    month: number;
    prevaction: () => void;
    nextaction: () => void;
};

export function CalendarNav({ month = new Date().getMonth() , prevaction, nextaction }: Props) {
    const year = new Date().getFullYear();

    return (
        <div className="flex gap-2 w-full mb-12 items-center justify-center">
            <ButtonNav direction = "back" onclick={prevaction} ></ButtonNav>
            <div className="flex items-center justify-center w-full max-w-[260px] h-10 bg-white rounded">
                <Text size="md" weight="medium">
                    {new Date(year, month).toLocaleString("pt-br", {
                        month: "long",
                        year: "numeric",
                    })}
                </Text>
            </div>
            <ButtonNav direction="forward" onclick={nextaction}></ButtonNav>
        </div>
    );
}
