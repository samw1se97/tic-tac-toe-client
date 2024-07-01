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
