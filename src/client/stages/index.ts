import moves, { Moves } from '../moves'
import { StageMap } from 'boardgame.io'
import { GameContext, GameState, StageType } from '../../type-defs'

export default {
  [StageType.DRAW_EVENT]: {
    moves: { [Moves.DRAW_CARD]: moves[Moves.DRAW_CARD] },
    next: StageType.DRAW_ACTION,
  },
  [StageType.DRAW_ACTION]: {
    moves: { [Moves.DRAW_CARD]: moves[Moves.DRAW_CARD] },
    next: StageType.CHOOSE_PLAYERS,
  },
  [StageType.CHOOSE_PLAYERS]: {
    moves: { [Moves.CHOOSE_PLAYERS]: moves[Moves.CHOOSE_PLAYERS] },
    next: StageType.DRAW_EVENT
  }
} as StageMap<GameState, GameContext>
