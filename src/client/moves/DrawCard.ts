import { Card, GameContext, GameState, MaybeExists, StageMapping, StageType } from '../../type-defs'
import { useLogger } from '../../utils'

const getCardFromStage = (G: GameState, ctx: GameContext): MaybeExists<Card> => {
  const { log, error } = useLogger('DrawCard')
  if (!ctx.activePlayers) {
    error('No active players')
    return null
  }
  const stage = ctx.activePlayers[ctx.currentPlayer] as StageType
  if (!StageMapping[stage]) {
    error('No Stage defined')
    return null
  }
  const cardType = StageMapping[stage].cardType
  if (!cardType) {
    error('No deck defined')
    return null
  }
  log('Drawing card from deck', cardType)
  const deck = G.decks[cardType]
  if (deck.cards.length <= 0) {
    error('No cards to draw from deck', cardType)
    return null
  }
  return deck.cards.pop()
}

export const DrawCard = (G: GameState, ctx: GameContext) => {
  const card = getCardFromStage(G, ctx)
  if (card) {
    ctx.events?.endStage()
  }
}
