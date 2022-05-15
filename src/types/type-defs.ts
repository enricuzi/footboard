export type Callback = (data: MaybeExists<unknown>) => void

export type MaybeNull<T> = T | null

export type MaybeUndefined<T> = T | undefined

export type MaybeExists<T> = T | null | undefined

export type MaybeEmpty<Array> = Array | []

export type MaybeReturn<T> = T | void

export type KeyOf<T> = keyof T

export type ValueOf<T> = T[keyof T]

export enum EventType {
  DATA_LOADED = 'DATA_LOADED',
  START_MATCH = 'START_MATCH',
  END_MATCH = 'END_MATCH',
}

export enum CardType {
  ACTION = 'ACTION',
  EVENT = 'EVENT',
  PLAYER = 'PLAYER'
}

export type Card = {
  name: string
  type: CardType
  effect: string
  description: MaybeExists<string>
}

export type Deck = {
  cards: MaybeEmpty<Array<Card>>
}

export type GameState = {
  decks: Record<CardType, Deck>
  hand: Record<CardType, MaybeExists<Card>>
}
