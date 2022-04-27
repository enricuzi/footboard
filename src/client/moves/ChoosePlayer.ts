import { GameContext, GameState } from '../index'
import { useLogger } from '../../utils'

export const ChoosePlayers = (G: GameState, ctx: GameContext) => {
  const { log, error } = useLogger(ChoosePlayers.name)
  log('Choosing the players')
}
