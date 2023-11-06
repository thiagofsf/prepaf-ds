import { Meta, StoryObj } from '@storybook/react'
import { PlayerCard, Props } from './PlayerCard'
import React from 'react'
import { Text } from './Text'

export default {
    title: 'Components/PlayerCard',
    component: PlayerCard,
    tags: ['autodocs'],
    args: {
        children:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum quam vitae ante viverra elementum. Praesent id aliquet neque, quis consectetur magna.',
        photo: './assets/userIcon.svg',
        align:'center',
        title:'Card Title',
    },
    argTypes:{
        align:{
            options: ['right' , 'left' , 'center' , 'justify'],
            control:{
                type: 'inline-radio'
            }
        }
    },
    parameters: {
        backgrounds: {
          default: 'gray',
          values: [
            { name: 'gray', value: '#F8F8F8' },
            { name: 'dark', value: 'rgb(51, 51, 51)' },
          ],
        },
      },
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const AlignLeft: StoryObj<Props> = {
    args:{
        align:'left'
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
        noTitle: true,
        children:(
            <>
            <Text size = "md"> <b>Nome do Jogador</b></Text><br />
            <Text size = "xs">Escrevendo segunda propriedade</Text><br />
            <br />
            <Text size = "xs">Usando Componentes</Text><br />
            <Text size = "xs">Construção de Card Com Componentes</Text>
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