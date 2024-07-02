import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../box';
import styles from './styles.module.css';
import {
  calculateWinner,
  horizontalCheck,
  verticalCheck,
} from '../../helpers/checkWinner';

function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const { currPlayer, setCurrPlayer } = useContext(GameContext);
  const [choises, setChoises] = useState([
    [, , ,],
    [, , ,],
    [, , ,],
  ]);
  // console.log(boxes);

  useEffect(() => {
    console.log(boxes);
  }, [boxes]);

  const handleBoxClick = (i) => {
    if (boxes[i] || calculateWinner(boxes)) return; // if the box is already clicked the exit the function
    const boxesCopy = boxes.slice(); //a copy which has the board changes.
    boxesCopy[i] = currPlayer; //adding to the board the current player
    setBoxes(boxesCopy);
    currPlayer === 'X' ? setCurrPlayer('O') : setCurrPlayer('X'); // switching player
  };

  const winner = calculateWinner(boxes);
  let status;
  if (winner) {
    status = `${boxes.at(winner[0])} won the game!`;
  } else {
    status = `${currPlayer}'s turn `;
  }

  return (
    <>
      <div>{status}</div>
      <div className={styles.board}>
        {boxes &&
          boxes.map((box, i) => (
            <Box
              index={i}
              handleBoxClick={handleBoxClick}
              player={box}
              winner={winner}
            />
          ))}
      </div>
    </>
  );
}

export default Board;
