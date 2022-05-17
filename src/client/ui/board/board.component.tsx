import React from 'react'
import './board.component.css'
import { CardComponent } from '../card/card.component'
import { Board } from '../../../types/type-defs'

export const BoardComponent = ({ cards }: Board) => {
  console.log('Drawing board', { cards })
  return <div className={'board'}>
    {
      cards.map((card, i) => <CardComponent key={i} type={card.type} effect={card.effect} name={card.name} description={card.description}/>)
    }
  </div>
}
