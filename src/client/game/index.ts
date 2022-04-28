import moves from '../moves'
import plugins from '../plugins'
import phases from '../phases'
import { useLogger } from '../../utils'
import { GameContext, GameState } from '../../type-defs'

const { log, error } = useLogger('GameController')

export const GameController = (gameState: GameState) => ({
  setup: (ctx: GameContext): GameState => {
    log('setup', gameState)
    return gameState
  },
  moves,
  plugins,
  turn: { minMoves: 1, maxMoves: 3 },
  phases
})
