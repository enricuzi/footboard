import React from 'react'
import './sub.zone.component.css'
import { CardComponent } from '../../card/card.component'
import { Card, CardType, EffectType, SubZone } from '../../../../types/type-defs'

const NoCard: Card = {
	name: '',
	type: CardType.NONE,
	effect: null,
	description: null
}

export const SubZoneComponent = ({ player, cards }: SubZone) => {
	if (!cards.length) {
		cards.push(NoCard)
	}

	return <div className={'sub-zone'}>
		<span>{player}</span>
		<div className={'cards'}>
			{
				cards.map((card, i) => <CardComponent key={i} type={card.type} effect={card.effect} name={card.name} description={card.description}/>)
			}
		</div>
	</div>
}
