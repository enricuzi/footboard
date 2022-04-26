import { Client } from 'boardgame.io/react'
import { GameController } from '../game'

export const GameClient = Client({
	game: GameController
})
