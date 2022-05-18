export type Callback = (data: MaybeExists<unknown>) => void

export type MaybeNull<T> = T | null

export type MaybeUndefined<T> = T | undefined

export type MaybeExists<T> = T | null | undefined

export type MaybeEmpty<Array> = Array | any[]

export type MaybeReturn<T> = T | void

export type KeyOf<T> = keyof T

export type ValueOf<T> = T[keyof T]

export enum PlayerType {
  NONE = 'NONE',
  PLAYER_1 = 'PLAYER_1',
  PLAYER_2 = 'PLAYER_2',
}

export enum EventType {
  DATA_LOADED = 'DATA_LOADED',
  START_MATCH = 'START_MATCH',
  END_MATCH = 'END_MATCH',
  CARD_CLICKED = 'CARD_CLICKED'
}

export enum CardType {
  NONE = 'NONE',
  ACTION = 'ACTION',
  EVENT = 'EVENT',
  PLAYER = 'PLAYER'
}

export enum EffectType {
  NONE = 'NONE'
}

export enum ZoneType {
  GOAL_AREA = 'GOAL_AREA',
  DEFENCE = 'DEFENCE',
  MIDDLE = 'MIDDLE',
  ATTACK = 'ATTACK'
}

export enum FlipStatus {
  NONE = 'NONE',
  FLIPPED = 'FLIPPED',
  BLOCKED = 'BLOCKED'
}

export type Card = {
  id: string
  name: string
  type: CardType
  effect: MaybeExists<EffectType>
  description: MaybeExists<string>
  flip: MaybeExists<FlipStatus>
}

export type Deck = {
  type: CardType
  cards: MaybeEmpty<Array<Card>>
}

export type Board = {
  match: MaybeExists<Match>
  decks: Array<Deck>
}

export type GameState = {
  decks: Array<Deck>
  hand: MaybeEmpty<Array<Card>>
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
