import { Meta, StoryObj } from '@storybook/react'
import { Footer, Props } from './Footer'
import { Text} from './Text'
import { Heading } from './Heading'

export default {
    title: 'Components/Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
    args: {
        children:'Lorem ipsum.',
        align:'right'
    },
    argTypes:{
        align: {
            options: ['left', 'center', 'right', 'justify'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const AlignLeft: StoryObj<Props> = {
    args:{
        align:'left'
    }
}

export const AlignCenter: StoryObj<Props> = {
    args:{
        align:'center'
    }
}

export const AlignRight: StoryObj<Props> = {
    args:{
        align:'right'
    }
}

export const AlignJustify: StoryObj<Props> = {
    args:{
        align:'justify'
    }
}

export const CustomComponent: StoryObj<Props> = {
    args:{
        asChild: true,
        align: 'center',
        children:(
            <>
            <div className='w-full text-center'>
            <Heading size='sm'>Exemplo de Rodapé com Componentes</Heading>
            </div>
            <div className='w-full text-center'>
            <Text>Você pode passar um ou mais componentes usando a propriedade 'AsChild' para o rodapé</Text>
            </div>
            </>
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