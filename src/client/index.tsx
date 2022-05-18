import React, { useEffect } from 'react'
import { GameState } from '../types/type-defs'
import { BoardComponent } from './ui/board/board.component'

export const GameClient = ({ decks, hand, match }: GameState) => {
	useEffect(() => {
		console.log('Loading GameClient', { decks, hand, match })
	}, [])
	return <div className={'client-container'}>
		<BoardComponent match={match} decks={decks}/>
	</div>
}
