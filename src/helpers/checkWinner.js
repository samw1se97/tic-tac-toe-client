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
// matTest(mat)
