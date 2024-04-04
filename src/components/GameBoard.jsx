import React from 'react'
import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const GameBoard = ({onSelectSquare, activePlayerSymbol}) => {
  
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    const updatedGameBoard = [...gameBoard];
    updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    setGameBoard(updatedGameBoard);

    onSelectSquare()
  }

  // const handleReset = () => {
  //   setGameBoard(initialGameBoard);
  // }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={handleSelectSquare.bind(null, rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

export default GameBoard