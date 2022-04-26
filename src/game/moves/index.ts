import { GameContext, GameState } from '../index'
import { useLogger } from '../../utils'

const { log, error } = useLogger('Moves')

export const Draw = (G: GameState, ctx: GameContext, deckType: string) => {
	log('Drawing card from deck', deckType)
	const deck = G.decks[deckType]
	if (deck.number <= 0) {
		error('No cards to draw from deck', deckType)
		return false
	}
	deck.number--
	return true
}

export const ChoosePlayers = (G: GameState, ctx: GameContext) => {
	log('Choosing the players')
}
