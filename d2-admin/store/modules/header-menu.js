import { keyPrefix } from 'd2-projects/d2-utils/object.js'
import { menuStore } from './menu.js'

export const headerMenuStore = () => keyPrefix(menuStore(), 'header')
