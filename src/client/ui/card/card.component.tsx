import React, { useState } from 'react'
import './card.component.css'
import { Card, CardType, FlipStatus } from '../../../types/type-defs'

export const CardComponent = ({ effect, type, name, description, flip, id }: Card) => {
	const [flipStatus, setFlipStatus] = useState(flip)

	const onClick = () => {
		if (flipStatus !== FlipStatus.BLOCKED) {
			setFlipStatus(flipStatus !== FlipStatus.NONE ? FlipStatus.NONE : FlipStatus.FLIPPED)
		}
	}

	return <div id={`card-${id}`} className={`card ${flipStatus} ${type === CardType.NONE ? 'none' : ''}`} onClick={onClick}>
		<div className={'content'}>
			<div className={'side front'}>
				<p>{name}</p>
				<p>{effect}</p>
				<p>{description}</p>
			</div>
			<div className={'side back'}>
				<p>{type}</p>
			</div>
		</div>
	</div>
}
