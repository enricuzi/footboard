import moves from '../moves'
import plugins from '../plugins'
import { GameContext, GameState } from '../index'
import { useLogger } from '../../utils'
import { Draw } from '../moves/Draw'
import { ChoosePlayers } from '../moves/ChoosePlayer'

const { log, error } = useLogger('GameController')

export const GameController = (gameState: GameState) => ({
  setup: (ctx: GameContext): GameState => {
    log('setup', gameState)
    return gameState
  },
  moves,
  plugins,
  turn: { minMoves: 1, maxMoves: 1 },
  phases: {
    drawEvent: {
      onBegin(G: GameState, ctx: GameContext) {
        log('Starting phase "drawEvent"')
        // ctx.deck = 'events'
      },
      endIf(G: GameState, ctx: GameContext) {
        return true
      },
      moves: { Draw },
      next: 'drawAction',
      start: true
    },
    drawAction: {
      onBegin(G: GameState, ctx: GameContext) {
        log('Starting phase "drawAction"')
        // ctx.deck = 'actions'
      },
      endIf() {
        return true
      },
      moves: { Draw },
      next: 'choosePlayers',
    },
    choosePlayers: {
      onBegin(G: GameState, ctx: GameContext) {
        log('Starting phase "choosePlayers"')
        // ctx.deck = 'players'
      },
      endIf() {
        return true
      },
      moves: { ChoosePlayers },
    }
  }
})
