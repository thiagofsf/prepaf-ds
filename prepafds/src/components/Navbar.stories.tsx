import { Meta, StoryObj } from '@storybook/react'
import { Navbar, Props } from './Navbar'

export default {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    args: {
        logo:'./assets/logo.png',
        logolink:'',
        links:'[{"label": "Jogadores", "href": "/", "id": "jogadores"},{"label": "Atividades", "href": "/", "id": "atividades"},{"label": "Relatório", "href": "/", "id": "relatorio"}]',
        avatarbutton: true,
        avatarimage: '/assets/foca.png',
        avatarname: 'Foca Silva'
    },
    argTypes:{
    }
} as Meta<Props>

export const Default: StoryObj<Props> = {}
