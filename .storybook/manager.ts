import {addons} from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import prepafTheme from './prepafTheme'

addons.setConfig({
    theme:prepafTheme,
})