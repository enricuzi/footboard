import { GameContext, GameState, PhaseType } from '../../type-defs'
import { PhaseMap } from 'boardgame.io'
import { useLogger } from '../../utils'

const { log } = useLogger('Phase')

export default {
  [PhaseType.START_MATCH]: {
    onBegin(G, ctx) {
      log('Starting phase', PhaseType.START_MATCH)
    },
    start: true,
    next: PhaseType.MIDDLE_TIME
  },
  [PhaseType.MIDDLE_TIME]: {
    onBegin(G, ctx) {
      log('Starting phase', PhaseType.MIDDLE_TIME)
    },
    next: PhaseType.END_MATCH
  },
  [PhaseType.END_MATCH]: {
    onBegin(G, ctx) {
      log('Starting phase', PhaseType.END_MATCH)
    },
  }
} as PhaseMap<GameState, GameContext>
