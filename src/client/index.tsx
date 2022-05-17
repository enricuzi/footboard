import React from 'react'
import { GameState } from '../types/type-defs'
import { MatchComponent } from './ui/match/match.component'

export const GameClient = ({ decks, hands, match }: GameState) => {
  return <div className={'client-container'}>
    {
      match ? <MatchComponent field={match.field}/> : null
    }
  </div>
}
