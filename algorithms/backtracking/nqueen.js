function solveNQueens(n) {
  const solutions = [];

  function backtrack(row, queens) {
    if (row === n) {
      solutions.push(queens.slice());
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValidPlacement(row, col, queens)) {
        queens.push(col);
        backtrack(row + 1, queens);
        queens.pop();
      }
    }
  }

  function isValidPlacement(row, col, queens) {
    for (let i = 0; i < queens.length; i++) {
      const prevRow = i;
      const prevCol = queens[i];

      if (
        col === prevCol ||
        row - col === prevRow - prevCol ||
        row + col === prevRow + prevCol
      ) {
        return false;
      }
    }

    return true;
  }

  backtrack(0, []);

  return solutions.map(queens => {
    return queens.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1));
  });
}

// Example usage:
const solutions = solveNQueens(100);
solutions.forEach(solution => {
  console.log(solution);
  console.log();
});
