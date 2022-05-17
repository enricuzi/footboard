import { getRandom } from './index'

export function Dice(dice = 6, sides = []) {
	const roll = (bonus = 0) => {
		const value = getRandom(dice)
		if (sides.length) {
			const side = sides[value]
			if (typeof side === 'number') {
				return side + bonus
			}
		}
		return value + bonus
	}
}
