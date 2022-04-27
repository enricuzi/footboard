import { useLogger } from '../../utils'
import { Draw } from './Draw'
import { ChoosePlayers } from './ChoosePlayer'

const logger = useLogger('Moves')

export default {
	Draw: Draw(logger),
	ChoosePlayers: ChoosePlayers(logger)
}
