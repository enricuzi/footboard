import React from 'react'
import { GameContext } from '../index'
import { MaybeNull } from '../../type-defs'
import { useLogger } from '../../utils'
import { BoardComponent } from '../../ui/board.component'

export const BoardController = (
  { ctx, moves, events, playerID }:
  {
    ctx: GameContext,
    moves: Record<string, unknown>,
    events: Record<string, unknown>,
    playerID: MaybeNull<string>
  }) => {
  const { log } = useLogger(BoardController.name)
  log('loading', { ctx, moves, events, playerID })
  return <BoardComponent/>
}
