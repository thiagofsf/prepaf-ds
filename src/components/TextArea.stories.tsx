import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaRootProps } from './TextArea'

export default {
    title: 'Components/Form/TextArea',
    component: TextArea.Root,
    tags: ['autodocs'],
    args: {
        children: (<TextArea.Input placeholder={"Texto teste para input"} />),
    },
    argTypes:{
        children: {
            table:{
                disable: true,
            }
        },
        color: {
            options: ['default', 'gray'],
            control:{
                type: 'inline-radio'
            }
        },
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
} as Meta<TextAreaRootProps>

export const Default: StoryObj<TextAreaRootProps> = {}
