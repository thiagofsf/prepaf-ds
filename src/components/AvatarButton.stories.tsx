import { Meta, StoryObj } from '@storybook/react'
import { AvatarButton, ButtonProps } from './AvatarButton'

export default {
    title: 'Components/Buttons/AvatarButton',
    component: AvatarButton,
    tags: ['autodocs'],
    args: {
        name:'Foca',
        image: '/assets/userIcon.svg'
    },
    argTypes:{
        size: {
            options: ['sm', 'md', 'lg', 'auto', 'full'],
            control:{
                type: 'inline-radio'
            }
        },
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
    args:{
        size:'sm',
    }
}

export const Medium: StoryObj<ButtonProps> = {
    args:{
        size:'md',
    }
}

export const Large: StoryObj<ButtonProps> = {
    args:{
        size:'lg',
    }
}

export const Auto: StoryObj<ButtonProps> = {
    args:{
        size:'auto',
    }
}

export const Full: StoryObj<ButtonProps> = {
    args:{
        size:'full',
    }
}