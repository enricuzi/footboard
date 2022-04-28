import { useLogger } from '../../utils'
import { Plugin } from 'boardgame.io'
import { Card } from '../../type-defs'

type PlayerState = {
	hand: Array<Card>,
	cards: Array<Card>
}

function PlayerPlugin(): Plugin {
	  const { log } = useLogger('PlayerPlugin')
		return {
	  	name: 'PlayerPlugin',
			setup ({ G, ctx, game }): PlayerState {
				log('setup', G, ctx, game)
				return {
					hand: [],
					cards: []
				}
			}
		}
}

export default PlayerPlugin()
