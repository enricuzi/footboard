import { getRandom } from '../../utils'
import {PluginApi, PluginSetup } from '.'
import { GameContext, GameState } from '../index'
import { BasePlugin } from './common'

class PlayerPlugin extends BasePlugin {
	create() {
	  const log = this.log
		const name = this.name
		return {
	  	name,
			setup: ({ G, ctx, game }: PluginSetup) => {
				log('setup', G, ctx, game, { status: 'IDLE', moves: 0 })
				return {
					id: getRandom(1000),
					status: 'IDLE',
					moves: 0,
					countMoves(G: GameState, ctx: GameContext) {
						log('CountMoves', ctx.numMoves)
						return ctx.numMoves
					}
				}
			},
			api: ({ G, ctx, game, data, playerID }: PluginApi) => {
				log('Player api', { G, ctx, game, data, playerID })
				return {}
			}
		}
	}
}

export default new PlayerPlugin('PlayerPlugin').create()
