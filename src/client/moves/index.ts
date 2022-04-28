import { useLogger } from '../../utils'
import { MoveMap } from 'boardgame.io'
import { Card, GameContext, GameState, MaybeExists, PhaseState, PhaseType } from '../../type-defs'

export enum Moves {
	DRAW = 'Draw',
	CHOOSE_PLAYERS = 'ChoosePlayers'
}

export default {
	[Moves.DRAW]: (G, ctx): MaybeExists<Card> => {
		const { log, error } = useLogger('Draw')
		const phase = ctx.phase as PhaseType
		if (!PhaseState[phase]) {
			error('No phase defined')
			return null
		}
		const phaseDeck = PhaseState[phase].deck
		if (!phaseDeck) {
			error('No deck defined')
			return null
		}
		log('Drawing card from deck', phaseDeck)
		const deck = G.decks[phaseDeck]
		if (deck.cards.length <= 0) {
			error('No cards to draw from deck', phaseDeck)
			return null
		}
		return deck.cards[0]
	},
	[Moves.CHOOSE_PLAYERS]: (G, ctx) => {
		const { log, error } = useLogger('ChoosePlayers')
		log('Choosing the players')
	}
} as MoveMap<GameState, GameContext>
