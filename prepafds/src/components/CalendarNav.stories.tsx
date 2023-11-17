import { Meta, StoryObj } from '@storybook/react'
import { CalendarNav, Props } from './CalendarNav'
import { useState } from 'react';


export default {
    title: 'Components/Calendar/CalendarNav',
    component: CalendarNav,
    tags: ['autodocs'],
    args: {
    },
    argTypes: {
        prevaction: {
            table: {
              disable: true,
            },
        },
        nextaction: {
            table: {
              disable: true,
            },
        },
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

export const withAction: StoryObj<Props> = {
    
    args: {
        month: 0,
        prevaction: ()=>(alert('click in prev button')),
        nextaction: ()=>(alert('click in next button')),
    },
}

