import { getRandom } from './index'

export class Dice {
  dice: number
	sides: unknown[]

	constructor (dice = 6, sides = []) {
  	this.dice = dice
  	this.sides = sides
	}

	roll (bonus = 0) {
  	const value = getRandom(this.dice)
  	if (this.sides.length) {
  		const side = this.sides[value]
  		if (typeof side === 'number') {
  			return side + bonus
  		}
  	}
  	return value + bonus
	}
}
