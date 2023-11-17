import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        children:'Lorem ipsum.',
        size:'md',
    },
    argTypes:{
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        },
        align: {
            options: ['left', 'center', 'right', 'justify'],
            control:{
                type: 'inline-radio'
            }
        },
        weight: {
            options: ['normal', 'semibold', 'bold'],
            control:{
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const ExtraSmall: StoryObj<TextProps> = {
    args:{
        size:'xs'
    }
}

export const Small: StoryObj<TextProps> = {
    args:{
        size:'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args:{
        size:'lg'
    }
}

export const AlignLeft: StoryObj<TextProps> = {
    args:{
        align:'left'
    }
}

export const AlignCenter: StoryObj<TextProps> = {
    args:{
        align:'center'
    }
}

export const AlignRight: StoryObj<TextProps> = {
    args:{
        align:'right'
    }
}

export const AlignJustify: StoryObj<TextProps> = {
    args:{
        align:'justify'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:(
            <p>Passe um elemento ou componente react para garantir configuração automática nas propriedades do componente</p>
        ),
    },
    argTypes: {
        children:{
            table:{
                disable:true,
            }
        },
        asChild: {
            table:{
                disable:true,
            }
        }
    }
}