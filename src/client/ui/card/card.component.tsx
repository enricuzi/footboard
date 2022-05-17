import React from 'react'
import './card.component.css'
import { Card } from '../../../types/type-defs'

export const CardComponent = ({ effect, type, name, description }: Card) => {
	console.log('Drawing card', { effect, type, name, description })
	return <div className={'card'}>
		<div className={'content'}>
			<title>{name}</title>
			<i>{type}</i>
			<p>{effect}</p>
			<p>{description}</p>
		</div>
	</div>
}
