import React from 'react'
import './zone.component.css'
import { SubZoneComponent } from '../sub-zone/sub.zone.component'
import { Zone } from '../../../../types/type-defs'

export const ZoneComponent = ({ subZones, type }: Zone) => {
	return <div className={'zone'}>
		<span>{type}</span>
		{
			subZones.map((subZone, i) => <div className={'content'} key={i}>
				{ i !== 0 ? <div className={'separator'}></div> : null }
				<SubZoneComponent cards={subZone.cards} player={subZone.player}/>
			</div>)
		}
	</div>
}
