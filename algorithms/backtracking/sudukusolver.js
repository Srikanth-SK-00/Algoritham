function solveSudoku(board) {
    const n = board.length;
    const sqrtN = Math.sqrt(n);
  
    function isSafe(row, col, num) {
      // Check if the number already exists in the same row
      for (let i = 0; i < n; i++) {
        if (board[row][i] === num) {
          return false;
        }
      }
  
      // Check if the number already exists in the same column
      for (let i = 0; i < n; i++) {
        if (board[i][col] === num) {
          return false;
        }
      }
  
      // Check if the number already exists in the same 3x3 sub-grid
      const startRow = Math.floor(row / sqrtN) * sqrtN;
      const startCol = Math.floor(col / sqrtN) * sqrtN;
      for (let i = 0; i < sqrtN; i++) {
        for (let j = 0; j < sqrtN; j++) {
          if (board[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    function solve() {
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= n; num++) {
              if (isSafe(row, col, num)) {
                board[row][col] = num;
  
                if (solve()) {
                  return true;
                }
  
                board[row][col] = 0; // Undo the choice and try the next number
              }
            }
  
            return false; // No number can be placed, backtrack
          }
        }
      }
  
      return true; // All cells have been filled, solution found
    }
  
    solve();
    return board;
  }
  
  // Example usage:
  const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  const solvedBoard = solveSudoku(sudokuBoard);
  console.log(solvedBoard);
  