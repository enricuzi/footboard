import PropTypes from 'prop-types'
import { CardType } from './type-defs'

export const Card = {
  Props: {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(CardType)).isRequired,
    effect: PropTypes.string
  },
  Default: {}
}

export const Deck = {
  Props: {
    cards: PropTypes.arrayOf(PropTypes.exact(Card.Props).isRequired).isRequired
  },
  Default: {
    cards: []
  }
}

export const Board = {
  Props: {
    board: PropTypes.arrayOf(PropTypes.exact(Card.Props).isRequired).isRequired
  },
  Default: {
    board: []
  }
}
