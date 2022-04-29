import { ComponentClass } from 'react'
import { Ctx, Plugin } from 'boardgame.io'

export type ComponentRef = string | ComponentClass

export type Callback = (data: unknown) => void

export type MaybeNull<T> = T | null

export type MaybeUndefined<T> = T | undefined

export type MaybeExists<T> = T | null | undefined

export type MaybeEmpty<Array> = Array | []

export type MaybeReturn<T> = T | void

export enum CardType {
  ACTION = 'action',
  EVENT = 'event',
  PLAYER = 'player'
}

export interface Card {
  type: CardType
  description?: string
}

export type Deck = {
  cards: MaybeEmpty<Array<Card>>
}

export enum StageType {
  DRAW_EVENT = 'DrawEvent',
  DRAW_ACTION = 'DrawAction',
  CHOOSE_PLAYERS = 'ChoosePlayers'
}

export enum PhaseType {
  START_MATCH = 'StartMatch',
  MIDDLE_TIME = 'MiddleTime',
  END_MATCH = 'EndMatch'
}

export const StageMapping = {
  [StageType.DRAW_EVENT]: {
    cardType: CardType.EVENT,
  },
  [StageType.DRAW_ACTION]: {
    cardType: CardType.ACTION
  },
  [StageType.CHOOSE_PLAYERS]: {
    cardType: CardType.PLAYER
  }
}

export type GameState = {
  decks: Record<CardType, Deck>
  hand: Record<CardType, MaybeExists<Card>>
  stage: StageType,
}

export type GameContext = Ctx & {
  deck?: CardType
  PlayerPlugin?: Plugin
}
