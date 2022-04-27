import { GameContext, GameState } from '../index'
import { Logger } from '../../utils/Logger'

export const Draw = ({ log, error }: Logger) => (G: GameState, ctx: GameContext, deckType: string) => {
  log('Drawing card from deck', deckType)
  const deck = G.decks[deckType]
  if (deck.number <= 0) {
    error('No cards to draw from deck', deckType)
    return false
  }
  deck.number--
  return true
}
