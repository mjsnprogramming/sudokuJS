const fillEasy = document.querySelectorAll('.fillEasy');

let board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

let numFilled = 38;

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const inRow = (row, number) => {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === number) {
            return true;
        }
    }
    return false;
}

const inCol= (col, number) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === number) {
            return true;
        }
    }
    return false;
}

const inSquare = (row, col, number) => {
    let squareRow = Math.floor(row / 3) * 3;
    let squareCol = Math.floor(col / 3) * 3;

    for (let i = squareRow; i < squareRow + 3; i++) {
        for (let j = squareCol; j < squareCol + 3; j++) {
            if (board[i][j] === number) {
                return true;
            }
        }
    }
    return false;
}

const fillBoard = () => {
    let filled = 0;
    while (filled < numFilled) {
        let row = randomInt(0,8);
        let col = randomInt(0,8);
        let number = randomInt(1,9);

        if (!inRow(row, number) && !inCol(col, number) && !inSquare(row, col, number)) {
            board[row][col] = number;
            filled++;
        }
    }

   
}
fillBoard();

for (let i = 0; i < fillEasy.length; i++) {
    let row = Math.floor(i / 9);
    let col = i % 9;
    fillEasy[i].value = board[row][col];

if (board[row][col] === 0) {
    fillEasy[i].value = '';
}
}

const validSudoku = (board) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) || !validBox(board, i, j, value)) {
                    return false;
                }
            }
        }
    }
    return true;
};


const validRow = (board, row, col, value) => {
    for (let j = 0; j < 8; j++) {
        if (j !== col) {
            if (board[row][j] === value) {
                return false;
            }
        }
    }
    return true;
}

const validColumn = (board, row, col, value) => { 
    
   for (let i = 0; i < 8; i++) {
       
       if (i !== row) {
           if (board[i][col] === value) {
               return false; 
           }
       }
   }
   
   return true;
}

const validBox = (board, row, col, value) => {

const startRow = row - (row % 3), startCol = col - (col % 3);
    
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (i !== row && j !== col && board[i][j] === value) {
                return false;
            }
            }
        }
        return true;
    }

   
 

const checkEndGame = () => {
    let isBoardFull = true;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                isBoardFull = false;
                break;
            }
        }
        if (!isBoardFull) {
            break;
        }
    }

    const isValid = validSudoku(board);

    if (isBoardFull && isValid) {
        alert('Congrats! Sudoku solved');
    }
};


for (let i = 0; i < fillEasy.length; i++) {
    const input = fillEasy[i];

    input.addEventListener('input', () => {
        const inputValue = parseInt(input.value);
        if (isNaN(inputValue) || inputValue < 1 || inputValue > 9 || !validSudoku(board)) {
            input.style.backgroundColor = 'red';
            input.value = '';
        } else {
            input.style.backgroundColor = 'white';
            board[row][col] = inputValue;
        }
        checkEndGame();
    });
}
