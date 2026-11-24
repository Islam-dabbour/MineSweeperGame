import Cell from './Cell.jsx';

function generateBoard() {

  // Create an empty 9 x 9 board
  const board = Array.from({ length: 9 }, () =>
    Array(9).fill(0)
  );

  // Place 10 mines
  let minesPlaced = 0;

  while (minesPlaced < 10) {

    const randomRow = Math.floor(Math.random() * 9);
    const randomCol = Math.floor(Math.random() * 9);

    // Check if the cell is empty
    if (board[randomRow][randomCol] === 0) {

      board[randomRow][randomCol] = -1;

      minesPlaced++;
    }
  }

     // Calculate neighboring mines
    for (let row = 0; row < 9; row++) {

    for (let col = 0; col < 9; col++) {

        if (board[row][col] !== -1) {

        board[row][col] = countNearbyMines(
            board,
            row,
            col
        );

        }
    }
    }

  return board;
}


function countNearbyMines(board, row, col) {

  let count = 0;

  for (let r = -1; r <= 1; r++) {

    for (let c = -1; c <= 1; c++) {

      const neighborRow = row + r;
      const neighborCol = col + c;

      // Check board boundaries
      if (
        neighborRow >= 0 &&
        neighborRow < 9 &&
        neighborCol >= 0 &&
        neighborCol < 9
      ) {

        if (board[neighborRow][neighborCol] === -1) {
          count++;
        }

      }
    }
  }

  return count;
}


function Board(){

    // const board = [
    //     [0, 0, 1],
    //     [0, 1, 0],
    //     [0, 0, 0]
    // ];

    // const board = Array.from({ length: 9 }, () =>
    //     Array(9).fill(0)
    // );

    const board = generateBoard();

    return(
        <div className="BoardGrid">
            {board.map((row, rowIndex) => (
                row.map((cell, cellIndex) => (
                    <Cell 
                        key={`${rowIndex}-${cellIndex}`} 
                        value = {cell}
                    />
                ))
            ))}
        </div>
    )
}

export default Board