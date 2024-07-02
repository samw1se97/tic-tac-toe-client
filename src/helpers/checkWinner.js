export const horizontalCheck = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === undefined) {
      // Check if the first cell in the row is empty,
      // it cant be a win if cel at index 0 is unedfined.
      continue; // Skip this row
    }

    let allSame = true;
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i][j + 1]) {
        allSame = false;
        console.log(`allSame = ${allSame}`);
        break;
      }
    }
    if (allSame) {
      return true;
    }
    console.log(matrix);
    console.log('======================================');
  }
  return false;
};

export const verticalCheck = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[0][i] === undefined) {
      continue; // Skip this column
    }
    let allSame = true;
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[j][i] !== matrix[j][i + 1]) {
        allSame = false;
        console.log(`allSame = ${allSame}`);
        break;
      }
    }

    if (allSame) {
      console.log(matrix);
      console.log(`column ${i} has all identical elements: ${matrix[i]}`);
      return true;
    }
  }
  return false;
};

export const calculateWinner = (boxes)=> {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return [a, b, c];
    }
  }
  return null;
}

// ==== TEST ====
let mat = [['00','X','02',],
           ['10','X','12',],
           ['20','X','22',]
          ]
          
function matTest(mat){
  let ans
  for (let i = 0; i < mat.length; i++) {
    
      for (let j = 0; j < mat[i].length-1; j++) {
        if ((mat[j][i] === mat[j][i + 1]))
          console.log(mat[j][i], mat[j + 1][i]);
        // }
        // }
      }     
  }
}

// import React, { useContext, useEffect, useState } from 'react';
// import styles from './style.module.scss';
// import Box from '../Box';
// import X from '../../assets/X.png';
// import O from '../../assets/O.png';
// import DataContext from '../../context/DataContext';

// export default function Board({ boardSize }) {
//   const context = useContext(DataContext);
//   const [playArr, setPlayArr] = useState([]);
//   const [ctnClicks, setCtnClicks] = useState(0);

//   const style = {
//     gridTemplateColumns: ` repeat(${boardSize ? boardSize : 2}, 1fr)`, // number of columns
//   };
//   const start = () => {
//     let BoxsArr = Array.from(
//       { length: boardSize ? boardSize : 2 } // create a new array according to the number of boxes. y=leat to right x=top to bottom
//     );
//     if (boardSize > 2) {
//       for (let i = 0; i < boardSize; i++) {
//         BoxsArr[i] = [];
//         for (let j = 0; j < boardSize; j++) {
//           BoxsArr[i][j] = {
//             loc: ` ${i}${j}`,
//             locX: i,
//             locY: j,
//             symbol: '',
//             img: '',
//           };
//         }
//       }
//     } else {
//       BoxsArr = BoxsArr.map((v, i) => {
//         return (v = { loc: i, symbol: '', img: '' });
//       });
//     }
//     console.log(BoxsArr, playArr);
//     setPlayArr(BoxsArr);
//   };

//   function checkWin(pos, ctnClicks, boardSize, playArr) {
//     let clicks = 0;
//     console.log(ctnClicks);
//     if (ctnClicks < boardSize * 2 - 2) return; // limit checks until can be a win

//     // check right
//     if (pos.locX + pos.locY == boardSize - 1) {
//       for (let i = 0; i < boardSize; i++) {
//         if (playArr[i][boardSize - 1 - i].symbol != pos.symbol) {
//           break;
//         }
//         clicks++;
//       }
//       if (clicks == boardSize) {
//         start();
//         console.log(pos.symbol, 'win  right');
//         return;
//       }
//     }

//     // check left
//     if (pos.locX == pos.locY) {
//       for (let i = 0; i < boardSize; i++) {
//         if (playArr[i][i].symbol != pos.symbol) {
//           break;
//         }
//         clicks++;
//       }
//       if (clicks == boardSize) {
//         console.log(pos.symbol, 'win  left');
//         start();
//         return;
//       }
//     }

//     // y & x axis checks - y=leat to right , x=top to bottom--

//     // x checks =>  x=top to bottom axis
//     clicks = 0;
//     for (let i = 0; i < boardSize; i++) {
//       const currentSymbol = playArr[i][pos.locY].symbol; //playArr[ i=position-x-][click position-y-] checked by clickPosition
//       if (currentSymbol != pos.symbol) break;
//       clicks++;
//     }

//     if (clicks == boardSize) {
//       console.log(pos.symbol, 'win x axis');
//       start();
//       clicks = 0;
//       return;
//     }
//     //  y checks => y=leat to right axis
//     clicks = 0;
//     for (let i = 0; i < boardSize; i++) {
//       const currentSymbol = playArr[pos.locX][i].symbol; //playArr[click position-x-][ i=position-y-] checked by clickPosition
//       if (currentSymbol != pos.symbol) break;
//       clicks++;
//     }

//     if (clicks == boardSize) {
//       console.log(pos.symbol, 'win y axis');
//       start();
//       clicks = 0;
//       return;
//     }
//     clicks = 0;
//   }

//   function handleClick(v, boardSize) {
//     if (v.symbol) return false;
//     if (!boardSize) {
//       playArr[v.loc] = {
//         ...v,
//         symbol: context.activePlayer.symbol,
//         img: context.activePlayer.img,
//       };
//     } else {
//       setCtnClicks((prev) => prev + 1);
//       let pos = {
//         ...playArr[v.locX][v.locY],
//         symbol: context.activePlayer.symbol,
//         img: context.activePlayer.img,
//       };
//       let newPArr = playArr;
//       newPArr[v.locX][v.locY] = pos;
//       setPlayArr(newPArr);
//       // console.log("names22", playArr, pos);

//       checkWin(
//         {
//           locX: v.locX,
//           locY: v.locY,
//           symbol: context.activePlayer.symbol,
//         },
//         ctnClicks,
//         boardSize,
//         newPArr
//       );
//     }

//     context.setActivePlayer(
//       context.activePlayer.symbol == 'x' ? context.playerO : context.playerX
//     );
//   }

//   useEffect(start, []);
//   return (
//     <div className={styles.board}>
//       <div className={styles.content} style={style}>
//         {!boardSize
//           ? playArr.map((v, i) => (
//               <Box
//                 key={i}
//                 v={v}
//                 handleClick={() => handleClick(v, boardSize)}
//               />
//             ))
//           : playArr.length > 1 &&
//             playArr.map((val) =>
//               val.map((v, i) => (
//                 <Box
//                   key={i}
//                   v={v}
//                   handleClick={() => handleClick(v, boardSize)}
//                 />
//               ))
//             )}
//       </div>
//     </div>
//   );
// }

// matTest(mat)
