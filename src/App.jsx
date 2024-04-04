import { useState } from 'react'
import './App.css'

import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return <main>
    <div id='game-container'>
      <ol id='players'>
        <Player initialName='Player 1' symbol='X'/>
        <Player initialName='Player 2' symbol='O'/>
      </ol>
      <GameBoard/>
    </div>

    LOG
  </main>
}

export default App
