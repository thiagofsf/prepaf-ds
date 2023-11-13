import { Meta, StoryObj } from '@storybook/react'
import { TabsButton, Props } from './TabsButton'

export default {
    title: 'Components/Buttons/TabsButton',
    component: TabsButton,
    tags: ['autodocs'],
    args: {
        links:'[{"label":"Tab1", "id":"tab1"}, {"label":"tab2", "id":"tab2"}, {"label":"Tab3", "id":"tab3"}]',
        initselected:"tab1"
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

