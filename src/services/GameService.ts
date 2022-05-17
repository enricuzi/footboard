import fixture from './fixture.json'
import { GameState } from '../types/type-defs'

class GameService {
	data: GameState

	constructor () {this.data = fixture as GameState}

	async save (data: GameState) {
		this.data = data
	}

	async load () {
		if (!this.data) {
			this.data = fixture as unknown as GameState
		}
		return this.data
	}

	async clear () {
		return {}
	}
}

export default GameService
