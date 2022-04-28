import { GameContext, GameState } from '../index'
import { useLogger } from '../../utils'

export const Draw = (G: GameState, ctx: GameContext, deckType: string) => {
  const { log, error } = useLogger(Draw.name)
  log('Drawing card from deck', deckType)
  const deck = G.decks[deckType]
  if (deck.cards.length <= 0) {
    error('No cards to draw from deck', deckType)
    return false
  }
  return true
}
