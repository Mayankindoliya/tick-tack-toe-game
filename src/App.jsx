import { useState } from 'react'
import './App.css'

import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0)

  return <main>
    <div id='game-container'>
      <ol id='players'>
        <Player/>
      </ol>

      GAME BOARD
    </div>

    LOG
  </main>
}

export default App
