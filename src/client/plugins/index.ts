import { GameContext, GameState } from '../index'
import PlayerPlugin from './PlayerPlugin'
import { Ctx, Game } from 'boardgame.io'

interface BaseConfig {
  G: GameState,
  ctx: GameContext,
  game: Game<GameState, Ctx, unknown>
}

export type PluginSetup = BaseConfig

export interface PluginApi extends BaseConfig {
  data: Record<string, unknown>
  playerID?: string
}

export default [
	PlayerPlugin
]
