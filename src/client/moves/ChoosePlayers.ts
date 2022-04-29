import { useLogger } from '../../utils'
import { GameContext, GameState } from '../../type-defs'

export const ChoosePlayers = (G: GameState, ctx: GameContext) => {
  const { log, error } = useLogger('ChoosePlayers')
  log('Choosing the players')
}
