import { Meta, StoryObj } from '@storybook/react'
import {CalendarDayContainer, Props} from './CalendarDayContainer'
import { CalendarEvent } from './CalendarEvent'

export default {
    title: 'Components/Calendar/CalendarDayContainer',
    component: CalendarDayContainer,
    tags: ['autodocs'],
    args: {
        children: "Children",
        day: new Date().getDay(),
    },
    argTypes:{
    }
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const Action: StoryObj<Props> = {
    args:{
        onclick: ()=>{alert('Click in Day Calendar')},
    }
}

export const Disabled: StoryObj<Props> = {
    args:{
        disabled:true,
        onclick:()=>(alert('teste')),
    }
}

export const Advanced: StoryObj<Props> = {
    parameters:{
        
    },
    args:{
        
        children:
        <>
            <CalendarEvent title='Evento' starts='08:00' ends='11:00' type='treino' onclick={()=>(alert('Click in Calendar Event'))}></CalendarEvent>
        </>
        ,
        //onclick: ()=>{alert('Click in Day Calendar')},
    }
}