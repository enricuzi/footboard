import { Ctx } from 'boardgame.io'
import plugins from './plugins'
import moves from './moves'
import { useLogger } from '../utils'
import { Client } from 'boardgame.io/react'

interface Deck {
  number: number
}

export interface GameState {
  decks: Record<string, Deck>
}

export type GameContext = Ctx

const { log, error } = useLogger('GameController')

const GameController = (gameState: GameState) => ({
  setup: (ctx: GameContext): GameState => {
    log('setup')
    return gameState
  },
  moves,
  plugins
})

export const GameClient = (gameState: GameState) => Client({
  game: GameController(gameState)
})
