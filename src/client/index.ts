import { Ctx } from 'boardgame.io'
import { Client } from 'boardgame.io/react'
import { GameController } from './game'
import { BoardController } from './board'

interface Deck {
  number: number
}

export interface GameState {
  decks: Record<string, Deck>
}

export type GameContext = Ctx

export const GameClient = (gameState: GameState) => {
  console.log('GameClient', 'create')
  return Client({
    game: GameController(gameState),
    board: BoardController
  })
}
