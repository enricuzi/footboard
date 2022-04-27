import moves from '../moves'
import plugins from '../plugins'
import { GameContext, GameState } from '../index'
import { useLogger } from '../../utils'

const { log, error } = useLogger('GameController')

export const GameController = (gameState: GameState) => ({
  setup: (ctx: GameContext): GameState => {
    log('setup', gameState)
    return gameState
  },
  moves,
  plugins
})
