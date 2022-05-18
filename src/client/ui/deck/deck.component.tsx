import React from 'react'
import './deck.component.css'
import { CardComponent } from '../card/card.component'
import { Deck, FlipStatus } from '../../../types/type-defs'

export const DeckComponent = ({ cards, type }: Deck) => {
	return <div className={`deck ${type}`}>
		<div className={'list'}>
			{
				cards.map((card, i) => {
					return <div key={i} className={'item'}>
						<CardComponent flip={FlipStatus.FLIPPED} id={card.id} type={card.type} effect={card.effect} name={card.name} description={card.description}/>
					</div>
				})
			}
		</div>
	</div>
}
