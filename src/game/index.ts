import { Ctx, Game } from 'boardgame.io'
import plugins  from './plugins'

interface Deck {
  number: number
}

export interface GameState {
  decks: Record<string, Deck>
}

export type GameContext = Ctx

export const GameController: Game<GameState> = {
	plugins
}
