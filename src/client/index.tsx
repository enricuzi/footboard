import React, { useEffect } from 'react'
import { GameState } from '../types/type-defs'
import { MatchComponent } from './ui/match/match.component'

export const GameClient = ({ decks, hand, match }: GameState) => {
	useEffect(() => {
		console.log('Loading GameClient', { decks, hand, match })
	}, [])
	return <div className={'client-container'}>
		{
			match ? <MatchComponent field={match.field}/> : null
		}
	</div>
}
