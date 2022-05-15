import React from 'react'
import { InferProps } from 'prop-types'
import './board.component.css'
import { CardComponent } from '../card/card.component'
import { Board } from '../../../types/prop-types'

export const BoardComponent = ({ board }: InferProps<typeof Board.Props>) => {
  console.log('Drawing board', { board })
  return <div className={'board'}>
    {
      board.map((card, i) => <CardComponent key={i} type={card.type} name={card.name} effect={card.effect}/>)
    }
  </div>
}

BoardComponent.propTypes = Board.Props
BoardComponent.defaultProps = Board.Default
