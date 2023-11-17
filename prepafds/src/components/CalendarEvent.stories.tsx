import { Meta, StoryObj } from '@storybook/react'
import { CalendarEvent, Props} from './CalendarEvent'

export default {
    title: 'Components/Calendar/CalendarEvents',
    component: CalendarEvent,
    tags: ['autodocs'],
    args: {
        title: 'Evento',
        starts: '09:00',
        ends: '10:00',
        type:'main',
    },
    argTypes:{
        type: {
            options: ['main', 'jogo', 'treino', 'avaliacao', 'recuperacao'],
            control:{
                type: 'select'
            }
        },
        starts: {
            control:{ 
            }
        }
    }
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const jogo: StoryObj<Props> = {
    args:{
        type:'jogo',
    }
}

export const treino: StoryObj<Props> = {
    args:{
        type:'treino',
    }
}

export const avaliacao: StoryObj<Props> = {
    args:{
        type:'avaliacao',
    }
}

export const recuperacao: StoryObj<Props> = {
    args:{
        type:'recuperacao',
    }
}

export const Action: StoryObj<Props> = {
    args:{
        type:'main',
        onclick: ()=>{alert('Click in Event Item')},
    }
}