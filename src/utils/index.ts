import { ComponentRef } from '../type-defs'
import { useLogger } from './Logger'
import { Dice } from './Dice'
import { EVENTS, useEvents } from './EventManager'

export const getRandom = (max = 1): number => Math.floor(Math.random() * max)

export const getComponentName = (component: ComponentRef): string => typeof component === 'string' ? component : component.displayName || component.name

export {
	useLogger,
	EVENTS,
	useEvents,
	Dice
}
