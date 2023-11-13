import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'
import { IoMdSearch } from 'react-icons/io'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    tags: ['autodocs'],
    args: {
        children: (<TextInput.Input placeholder="Teste" />),
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
        type: {
            options: ['default', 'search'],
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
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
