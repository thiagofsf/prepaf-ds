import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    args: {
        children:'Lorem ipsum.',
        size:'md',
    },
    argTypes:{
        size: {
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args:{
        size:'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args:{
        size:'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children:(
            <p>Passe um elemento ou componente react como Heading</p>
        ),
    },
    argTypes: {
        children:{
            table:{
                disable:true,
            }
        }
    }
}