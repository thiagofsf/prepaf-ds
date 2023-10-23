import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
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
        }
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