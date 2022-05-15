import React from 'react'
import { InferProps } from 'prop-types'
import { CardComponent } from '../card/card.component'
import { Deck } from '../../../types/prop-types'

export const DeckComponent = ({ cards }: InferProps<typeof Deck.Props>) => {
  return <div className={'deck'}>
    {
      cards.map((card, i) => <CardComponent key={i} type={card.type} effect={card.effect} name={card.name}/>)
    }
  </div>
}

DeckComponent.propTypes = Deck.Props
DeckComponent.defaultProps = Deck.Default
