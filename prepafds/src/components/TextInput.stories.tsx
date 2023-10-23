import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps, TextInputType } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    args: {
        placeholder: 'Insira um texto'
    },
    argTypes:{
       
    }
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
