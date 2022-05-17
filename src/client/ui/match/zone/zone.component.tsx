import React from 'react'
import './zone.component.css'
import { SubZoneComponent } from '../sub-zone/sub.zone.component'
import { Zone } from '../../../../types/type-defs'

export const ZoneComponent = ({ subZones, type }: Zone) => {
  return <div className={'field'}>
    <span>{type}</span>
    {
      subZones.map((subZone, i) => <SubZoneComponent key={i} cards={subZone.cards} player={subZone.player}/>)
    }
  </div>
}
