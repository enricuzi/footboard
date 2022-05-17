import React from 'react'
import './sub.zone.component.css'
import { CardComponent } from '../../card/card.component'
import { SubZone } from '../../../../types/type-defs'

export const SubZoneComponent = ({ player, cards }: SubZone) => {
  return <div className={'sub-zone'}>
    <span>{player}</span>
    {
      cards.map((card, i) => <CardComponent key={i} type={card.type} effect={card.effect} name={card.name} description={card.description}/>)
    }
  </div>
}
