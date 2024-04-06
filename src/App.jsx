import { useState } from 'react'
import './App.css'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './Winning-combinations';

function deriveActivePlayer(gameTurns) {
  const currentPlayer = gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X';
  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([])
  //const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player
          initialName='Player 1'
          symbol='X' isActive={activePlayer === 'X'}
        />
        <Player
          initialName='Player 2'
          symbol='O' isActive={activePlayer === 'O'}
        />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare}
        turns={gameTurns}
      />
    </div>
    < Log turns={gameTurns} />
  </main>
}

export default App
