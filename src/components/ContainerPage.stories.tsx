import { Meta, StoryObj } from '@storybook/react'
import { ContainerPage, Props } from './ContainerPage'
import { Heading } from './Heading'
import { Text } from './Text'

export default {
    title: 'Components/Layout/ContainerPage',
    component: ContainerPage,
    tags: ['autodocs'],
    args: {
        children:'Page Content',
    },
    argTypes:{
        align: {
            options: ['left', 'center', 'right'],
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

export const CustomComponent: StoryObj<Props> = {
    args:{
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
    }
}