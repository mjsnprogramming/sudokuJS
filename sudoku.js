const sudokuGetDateFive = new Date().getTime() + 300000;
const sudokuGetDateTen = new Date().getTime() + 600000;
const sudokuGetDateTwenty = new Date().getTime() + 1200000;

const sudokuCounter = setInterval(() => {
    const now = new Date().getTime();
    const differenceFive = sudokuGetDateFive - now;
    const differenceTen = sudokuGetDateTen - now;
    const differenceTwenty = sudokuGetDateTwenty - now;

    const easy = document.querySelector('#easy');
    const medium = document.querySelector('#medium');
    const hard = document.querySelector('#hard');

    let minutes, seconds;

    if (easy) {
        minutes = Math.floor((differenceTwenty % (1000 * 60 * 60) / (1000 * 60)));
        seconds = Math.floor((differenceTwenty % (1000 * 60) / (1000)));
    }
    else if (medium.clicked) {
        minutes = Math.floor((differenceTen % (1000 * 60 * 60) / (1000 * 60)));
        seconds = Math.floor((differenceTen % (1000 * 60) / (1000)));
    }
    else if (hard) {
        minutes = Math.floor((differenceFive % (1000 * 60 * 60) / (1000 * 60)));
        seconds = Math.floor((differenceFive % (1000 * 60) / (1000)));
    }

    const timer = document.querySelector('#timer');
    timer.innerHTML = minutes + ':' + seconds;
    
    if (differenceFive < 0 || differenceTen < 0 || differenceTwenty < 0) {
        clearInterval(sudokuCounter);
        timer.innerHTML = 'End of Time';
    }
}, 1000);