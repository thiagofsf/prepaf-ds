import Select from "react-select";
import makeAnimated from "react-select/animated";

type Data = {
    label: string;
    value: string;
    color?: string;
    icon?: string;
};

export interface Props {
    data: Data[];
    value?: any;
    placeholder?: string;
    className?: string;
    isMulti?: boolean;
    closeMenuOnSelect?: boolean;
    hideSelectedOptions?: boolean;
    onChange?: any;
};

export function MultiSelect({ data, ...props }: Props) {
    const animatedComponents = makeAnimated();
    const options = [...data];

    const dot = (color = "transparent") => {
        return ` before:bg-${color} before:inline-block before:rounded-full before:content-[' '] before:mr-2 before:h-2.5 before:w-2.5`;
    };

    return (
        <>
            <Select
                unstyled
                {...props}
                components={animatedComponents}
                options={options.map((data) => data)}
                classNames={{
                    clearIndicator: () =>
                        "flex items-center justify-center px-2 h-full bg-prepaf-orange hover:bg-orange-200",
                    control: () =>
                        "bg-white pl-5 rounded-md border-2 border-white focus-within:border-prepaf-orange",
                    dropdownIndicator: () =>
                        "flex items-center justify-center rounded-r px-2 h-full bg-prepaf-orange hover:bg-orange-200",
                    indicatorsContainer: () =>
                        "text-white hover:cursor-pointer ",
                    indicatorSeparator: () => "bg-white",
                    menu: () => "drop-shadow-md",
                    multiValue: () =>
                        "mr-1 rounded bg-prepaf-orange text-white font-medium",
                    multiValueLabel: () => "p-2",
                    multiValueRemove: () =>
                        "px-1.5 ml-2 rounded-r transition-colors hover:bg-orange-200",
                    option: ({ isSelected, data }) =>
                        `bg-white px-6 py-2 hover:cursor-pointer hover:bg-yellow-200  ${
                            isSelected && !data.color
                                ? " before:content-['✔'] before:mr-2.5 before:text-green-300"
                                : ` flex items-center ${dot(data.color)}`
                        } `,
                    placeholder: () => "text-gray-500 p-2",
                    singleValue: ({ data }: { data: Data }) =>
                        `flex items-center ${dot(data.color)}`,
                }}
            />
        </>
    );
}
