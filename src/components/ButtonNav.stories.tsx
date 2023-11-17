import { Meta, StoryObj } from '@storybook/react'
import { ButtonNav, ButtonNavProps } from './ButtonNav'

export default {
    title: 'Components/Buttons/ButtonNav',
    component: ButtonNav,
    tags: ['autodocs'],
    args: {
        children:'Button Text',
        type:'main',
    },
    argTypes:{
        direction: {
            options: ['up', 'down', 'forward', 'back'],
            control:{
                type: 'inline-radio'
            }
        },
        size: {
            options: ['sm', 'md', 'lg', 'auto', 'full'],
            control:{
                type: 'inline-radio'
            }
        },
    }
} as Meta<ButtonNavProps>

export const Default: StoryObj<ButtonNavProps> = {}

export const Confirm: StoryObj<ButtonNavProps> = {
    args:{
        type:'confirm',
    }
}

export const Critical: StoryObj<ButtonNavProps> = {
    args:{
        type:'critical',
    }
}

export const Small: StoryObj<ButtonNavProps> = {
    args:{
        size:'sm',
    }
}

export const Medium: StoryObj<ButtonNavProps> = {
    args:{
        size:'md',
    }
}

export const Large: StoryObj<ButtonNavProps> = {
    args:{
        size:'lg',
    }
}

export const Auto: StoryObj<ButtonNavProps> = {
    args:{
        size:'auto',
    }
}

export const Full: StoryObj<ButtonNavProps> = {
    args:{
        size:'full',
    }
}

export const Action: StoryObj<ButtonNavProps> = {
    args:{
        size:'full',
        onclick: ()=>{alert('teste')},
    }
}