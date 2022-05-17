import { Dice } from './Dice'
import { EVENTS, useEvents } from './EventManager'

export const getRandom = (max = 1): number => Math.floor(Math.random() * max)

export {
	EVENTS,
	useEvents,
	Dice
}
