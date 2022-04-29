import { MoveMap } from 'boardgame.io'
import { GameContext, GameState, MaybeReturn } from '../../type-defs'
import { DrawCard } from './DrawCard'
import { ChoosePlayers } from './ChoosePlayers'

export enum Moves {
	DRAW_CARD = 'DrawCard',
	CHOOSE_PLAYERS = 'ChoosePlayers'
}

export default {
	[Moves.DRAW_CARD]: (G, ctx): MaybeReturn<GameState> => {
		DrawCard(G, ctx)
	},
	[Moves.CHOOSE_PLAYERS]: (G, ctx) => {
		ChoosePlayers(G, ctx)
	}
} as MoveMap<GameState, GameContext>
