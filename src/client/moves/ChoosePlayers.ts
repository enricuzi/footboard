import { useLogger } from '../../utils'
import { Move } from 'boardgame.io'
import { GameContext, GameState } from '../../type-defs'

export const ChoosePlayers: Move<GameState, GameContext> = (G, ctx) => {
  const { log, error } = useLogger('ChoosePlayers')
  log('Choosing the players')
}
