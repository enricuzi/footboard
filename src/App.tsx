import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import GameService from './services/GameService'
import { useLogger } from './utils'
import { GameClient, GameState } from './client'

const App = () => {
  const [gameState, setGameState] = useState(null as unknown as GameState)

  const { log } = useLogger(App.name)

  const loadGame = useCallback(() => {
    log('Loading AppClient')
    const AppClient = GameClient(gameState)
    return <AppClient matchID={'MatchTest'} playerID={'Player1'}/>
  }, [gameState])

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
        loadGame():
        <div>Loading Data</div>
    }
  </div>
}

export default App
