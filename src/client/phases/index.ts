import moves, { Moves } from '../moves'
import { PhaseMap } from 'boardgame.io'
import { useLogger } from '../../utils'
import { GameContext, GameState, PhaseType } from '../../type-defs'

const { log } = useLogger('Phase')

export default {
  [PhaseType.DRAW_EVENT]: {
    onBegin(G, ctx) {
      log('Starting phase', PhaseType.DRAW_EVENT)
    },
    moves: { Draw: moves[Moves.DRAW] },
    next: PhaseType.DRAW_ACTION,
    start: true
  },
  [PhaseType.DRAW_ACTION]: {
    onBegin(G, ctx) {
      log('Starting phase', PhaseType.DRAW_ACTION)
    },
    endIf() {
      return true
    },
    moves: { Draw: moves[Moves.DRAW] },
    next: 'choosePlayers',
  },
  [PhaseType.CHOOSE_PLAYERS]: {
    onBegin(G, ctx) {
      log('Starting phase', PhaseType.CHOOSE_PLAYERS)
    },
    endIf() {
      return true
    },
    moves: { ChoosePlayers: moves[Moves.CHOOSE_PLAYERS] },
  }
} as PhaseMap<GameState, GameContext>
