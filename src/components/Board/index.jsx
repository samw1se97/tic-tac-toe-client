import React, { useEffect, useState } from 'react';
import Box from '../box';
import styles from './styles.module.css';
import { horizontalCheck, verticalCheck } from '../../helpers/checkWinner';
function Board() {
  const [choises, setChoises] = useState([
    [, , ,],
    [, , ,],
    [, , ,],
  ]);

  useEffect(() => {
    if (horizontalCheck(choises)) {
      console.log('we have a winner!!');
      alert('we have a winner!');
      setChoises([
        [, , ,],
        [, , ,],
        [, , ,],
      ]);
    }
  }, [choises]);
  // console.log(choises);

  return (
    <div className={styles.board}>
      {/* {choises.map(row, rowIndex) =>    } */}

      {Array.from({ length: 3 }, (value, i) =>
        Array.from({ length: 3 }, (value, j) => (
          <Box i={i} j={j} choises={choises} setChoises={setChoises} />
        ))
      )}
    </div>
  );
}

export default Board;
