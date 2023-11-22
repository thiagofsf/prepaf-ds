import { Meta, StoryObj } from '@storybook/react'
import { LogoImg, Props } from './LogoImg'

export default {
    title: 'Components/Image/LogoImg',
    component: LogoImg,
    tags: ['autodocs'],
    args: {
        image:'./assets/logo.png',
        link:'#',
        size:'md',
    },
    argTypes:{
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const ExtraSmall: StoryObj<Props> = {
    args:{
        size:'xs'
    }
}

export const Small: StoryObj<Props> = {
    args:{
        size:'sm'
    }
}

export const Large: StoryObj<Props> = {
    args:{
        size:'lg'
    }
}

export const ExtraLarge: StoryObj<Props> = {
    args:{
        size:'xl'
    }
}

export const Full: StoryObj<Props> = {
    args:{
        size:'full'
    }
}

/*export const CustomComponent: StoryObj<Props> = {
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
}*/