import React from 'react'
import { CardComponent } from '../card/card.component'
import { Deck } from '../../../types/type-defs'

export const DeckComponent = ({ cards, type }: Deck) => {
	return <div className={'deck'}>
		<span>{type}</span>
		{
			cards.map((card, i) => <CardComponent key={i} type={card.type} effect={card.effect} name={card.name} description={card.description}/>)
		}
	</div>
}
