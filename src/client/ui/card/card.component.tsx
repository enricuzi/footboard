import React from 'react'
import { InferProps } from 'prop-types'
import './card.component.css'
import { Card } from '../../../types/prop-types'

export const CardComponent = ({ name, type, effect }: InferProps<typeof Card.Props>) => {
  console.log('Drawing card', { name, type, effect })
  return <div className={'card'}>
    <title>{name}</title>
    <i>{type}</i>
    <p>{effect}</p>
  </div>
}

CardComponent.propTypes = Card.Props
CardComponent.defaultProps = Card.Default
