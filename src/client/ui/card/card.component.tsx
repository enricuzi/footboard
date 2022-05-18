import React from 'react'
import './card.component.css'
import { Card, CardType } from '../../../types/type-defs'

export const CardComponent = ({ effect, type, name, description }: Card) => {
	return <div className={`card ${type === CardType.NONE ? 'none' : ''}`}>
		<div className={'content'}>
			<title>{name}</title>
			<i>{type}</i>
			<p>{effect}</p>
			<p>{description}</p>
		</div>
	</div>
}
