import React from 'react'
import './board.component.css'
import { Board } from '../../../types/type-defs'
import { DeckComponent } from '../deck/deck.component'
import { MatchComponent } from '../match/match.component'

export const BoardComponent = ({ decks, match }: Board) => {
	console.log('Drawing board', { decks, match })
	return <div className={'board'}>
		<div className={'decks'}>
			{
				decks.map((deck, i) => <DeckComponent key={i} type={deck.type} cards={deck.cards}/>)
			}
		</div>
		{
			match ? <MatchComponent field={match.field}/> : null
		}
	</div>
}
