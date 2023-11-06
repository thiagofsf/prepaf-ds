import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children:'Button Text',
        type:'main'
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

export const Confirm: StoryObj<ButtonProps> = {
    args:{
        type:'confirm',
    }
}

export const Critical: StoryObj<ButtonProps> = {
    args:{
        type:'critical',
    }
}

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