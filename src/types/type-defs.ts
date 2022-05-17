export type Callback = (data: MaybeExists<unknown>) => void

export type MaybeNull<T> = T | null

export type MaybeUndefined<T> = T | undefined

export type MaybeExists<T> = T | null | undefined

export type MaybeEmpty<Array> = Array | []

export type MaybeReturn<T> = T | void

export type KeyOf<T> = keyof T

export type ValueOf<T> = T[keyof T]

export enum PlayerType {
  NONE = 'NONE',
  PLAYER_1 = 'PLAYER_1',
  PLAYER_2 = 'PLAYER_2',
}
export const PlayerTypes = Object.values(PlayerType)

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
export const CardTypes = Object.values(CardType)

export enum ZoneType {
  GOAL_AREA = 'GOAL_AREA',
  DEFENCE = 'DEFENCE',
  MIDDLE = 'MIDDLE',
  ATTACK = 'ATTACK'
}
export const ZoneTypes = Object.values(ZoneType)

export type Card = {
  name: string
  type: CardType
  effect: MaybeExists<string>
  description: MaybeExists<string>
}

export type Deck = {
  type: CardType
  cards: MaybeEmpty<Array<Card>>
}

export type Board = {
  cards: MaybeEmpty<Array<Card>>
}

export type GameState = {
  decks: Record<CardType, Deck>
  hands: MaybeExists<Record<PlayerType, Record<CardType, MaybeExists<Card>>>>
  match: MaybeExists<Match>
}

export type SubZone = {
  player: PlayerType
  cards: MaybeEmpty<Array<Card>>
}

export type Zone = {
  type: ZoneType
  subZones: Array<SubZone>
}

export type Field = {
  zones: Array<Zone>
}

export type Match = {
  field: Field
}
