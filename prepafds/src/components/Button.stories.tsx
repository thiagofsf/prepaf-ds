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