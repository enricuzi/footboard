import { ComponentClass } from 'react'
import { Ctx, Plugin } from 'boardgame.io'

export type ComponentRef = string | ComponentClass

export type Callback = (data: unknown) => void

export type MaybeNull<T> = T | null

export type MaybeUndefined<T> = T | undefined

export type MaybeExists<T> = T | null | undefined

export type MaybeEmpty<Array> = Array | []

export enum CardType {
  ACTION = 'action',
  EVENT = 'event',
  PLAYER = 'player'
}

export enum DeckType {
  ACTIONS = 'actions',
  EVENTS = 'events',
  PLAYERS = 'players'
}

export interface Card {
  type: CardType
  description?: string
}

export type Deck = {
  cards: MaybeEmpty<Array<Card>>
}

export enum PhaseType {
  DRAW_EVENT = 'DrawEvent',
  DRAW_ACTION = 'DrawAction',
  CHOOSE_PLAYERS = 'ChoosePlayers'
}

export const PhaseState = {
  [PhaseType.DRAW_EVENT]: {
    deck: DeckType.EVENTS
  },
  [PhaseType.DRAW_ACTION]: {
    deck: DeckType.ACTIONS
  },
  [PhaseType.CHOOSE_PLAYERS]: {
    deck: DeckType.PLAYERS
  }
}

export type GameState = {
  decks: Record<DeckType, Deck>
}

export type GameContext = Ctx & {
  deck?: DeckType
  PlayerPlugin?: Plugin
}
