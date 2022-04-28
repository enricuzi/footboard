import { Ctx, Plugin } from 'boardgame.io'
import { Client } from 'boardgame.io/react'
import { GameController } from './game'
import { BoardController } from './board'
import { MaybeEmpty } from '../type-defs'

enum CardType {
  ACTION,
  EVENT,
  PLAYERS
}

export interface Card {
  type: CardType
  description?: string
}

export type Deck = {
  cards: MaybeEmpty<Array<Card>>
}

export type GameState = {
  decks: Record<string, Deck>
}

export type GameContext = Ctx & {
  deck?: string
  PlayerPlugin?: Plugin
}

export const GameClient = (gameState: GameState) => {
  console.log('GameClient', 'create')
  return Client({
    game: GameController(gameState),
    board: BoardController
  })
}
