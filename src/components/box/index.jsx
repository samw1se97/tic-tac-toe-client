import React, { useState } from 'react';
import styles from './styles.module.css';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Box({ handleBoxClick, index, player, winner }) {
  // let winnerStyles;
  // if (winner) {
  //   winnerStyles = { width: '80%' };
  // }
  // };
  return (
    <div className={styles.box} onClick={() => handleBoxClick(index)}>
      {player && (
        <img
          src={player ? `${player}.png` : null}
          alt=''
          style={winner && winner.includes(index) ? { width: '80%' } : null}
        />
      )}
    </div>
  );
}



export default Box;
