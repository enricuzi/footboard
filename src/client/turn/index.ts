import { GameContext, GameState, StageType } from '../../type-defs'
import stages from '../stages'
import { TurnConfig } from 'boardgame.io'
import { useLogger } from '../../utils'

const { log } = useLogger('Turn')

export default {
  minMoves: 1,
  maxMoves: 3,
  activePlayers: {
    currentPlayer: StageType.DRAW_EVENT
  },
  onBegin(G, ctx) {
    log('Starting turn', `player ${ctx.currentPlayer}`)
  },
  stages
} as TurnConfig<GameState, GameContext>
