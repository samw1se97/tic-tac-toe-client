import React, { useState } from 'react';
import styles from './styles.module.css';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Box({ i, j, choises, setChoises }) {
  const { currPlayer, setCurrPlayer } = useContext(GameContext);
  const [isClicked, setIsClicked] = useState('');

  // console.log(ansArray);
  const handleClick = () => {
    console.log(`${currPlayer} turn`);
    if (isClicked) {
      console.log(`${index} is already clicked`);
    } else {
      setIsClicked(currPlayer);
      let cloneMatrix = [...choises];
      cloneMatrix[i][j] = currPlayer;
      setChoises([...cloneMatrix]);

      // changing players
      currPlayer === 'X' ? setCurrPlayer('O') : setCurrPlayer('X');
    }
  };
  return (
    <div className={styles.box} onClick={handleClick}>
      {isClicked && <img src={`${isClicked}.png`} alt='' />}
    </div>
  );
}

export default Box;
