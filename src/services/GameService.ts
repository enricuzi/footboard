import fixture from './fixture.json'
import { GameState } from '../type-defs'

class GameService {
    data: GameState

    constructor () {
      this.data = fixture
    }

    async save (data: GameState) {
      this.data = data
    }

    async load () {
      if (!this.data) {
        this.data = fixture
      }
      return this.data
    }

    async clear () {
      return {}
    }
}

export default GameService
