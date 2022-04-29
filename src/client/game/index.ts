import moves from '../moves'
import plugins from '../plugins'
import stages from '../stages'
import { useLogger } from '../../utils'
import { GameContext, GameState, StageType } from '../../type-defs'
import { TurnConfig } from 'boardgame.io'

const { log, error } = useLogger('GameController')

export const GameController = (gameState: GameState) => ({
  setup: (ctx: GameContext): GameState => {
    log('setup', gameState)
    return gameState
  },
  moves,
  plugins,
  turn: {
    minMoves: 1,
    maxMoves: 3,
    activePlayers: {
      currentPlayer: StageType.DRAW_EVENT
    },
    onBegin(G, ctx) {
      log('Starting turn', `player ${ctx.currentPlayer}`)
    },
    stages
  } as TurnConfig<GameState, GameContext>,
})
