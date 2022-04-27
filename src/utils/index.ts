import { useLogger } from './Logger'
import { Dice } from './Dice'
import { EVENTS, useEvents } from './EventManager'

export const getRandom = (max = 1): number => Math.floor(Math.random() * max)

export {
	useLogger,
	EVENTS,
	useEvents,
	Dice
}
