import React, { useEffect, useState } from 'react'
import './App.css'
import { GameClient, GameState } from './client'
import GameService from './services/GameService'
import { useLogger } from './utils'

const App = () => {
  const [gameState, setGameState] = useState(null as unknown as GameState)

  const { log } = useLogger(App.name)

  useEffect(() => {
    async function loadGameState() {
      const gameService = new GameService()
      return await gameService.load()
    }
    loadGameState().then((data) => {
      log('Loaded gameState', data)
      setGameState(data)
    })
  }, [])

  return <div>
    {
      gameState ?
        <GameClient gameState={gameState}/> :
        <div>Loading Data</div>
    }
  </div>
}

export default App
