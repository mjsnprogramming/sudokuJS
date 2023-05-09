let fillHard = document.querySelectorAll('.fillHard');

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

let numFilled = 27;

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

const inCol = (col, number) => {
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

for (let i = 0; i < fillHard.length; i++) {
    let row = Math.floor(i / 9);
    let col = i % 9;
    fillHard[i].value = board[row][col];


if (board[row][col] === 0) {
    fillHard[i].value = '';
}
}