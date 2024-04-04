import { useState } from 'react'
import './App.css'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function App() {

  const [gameTurns, setGameTurns] = useState([])

  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')

    setGameTurns(prevTurn => {

      let currentPlayer = 'X';

      if (prevTurn.length > 0 && prevTurn.length[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurn];
    })
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
        <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
    </div>
    < Log />
  </main>
}

export default App
