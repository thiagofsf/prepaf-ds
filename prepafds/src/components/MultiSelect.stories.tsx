import { Meta, StoryObj } from '@storybook/react'
import { MultiSelect, Props } from './MultiSelect'

export default {
    title: 'Components/Form/Select',
    component: MultiSelect,
    tags: ['autodocs'],
    decorators:[
        (Story)=>(<div className='min-h-[200px] p-3'><Story /></div>)
    ],
    args: {
        data:[{label:"item 1", value:"item1"}, {label:"item 2", value:"item2"}, {label:"item 3", value:"item3"}],
        placeholder:"Select with multiple function"
    },
    argTypes:{
        isMulti: {
            control: 'boolean',
        },
        closeMenuOnSelect: {
            control: 'boolean',
        },
        hideSelectedOptions: {
            control: 'boolean',
        }
    },
    parameters: {
        backgrounds: {
          default: 'gray',
          values: [
            { name: 'gray', value: '#F8F8F8' },
            { name: 'dark', value: 'rgb(51, 51, 51)' },
          ],
        },
    },
} as Meta<Props>

export const Default: StoryObj<Props> = {}

