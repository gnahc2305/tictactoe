// const sections_btn = Array.from(document.querySelectorAll('.section'));
// const reset_btn = document.querySelector('.resetButton');
// const start_btn = document.querySelector('.startButton');
// const test_btn = document.querySelector('.test');
const local_btn = document.querySelector('.localButton');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

local_btn.addEventListener('click', () => {
    local_btn.style.backgroundColor = 'green';

    let gameBoard = [];

    let player = { isTurn: false, gameCount: 0 }

    let computer = { isTurn: false, gameCount: 0 }

    // false = empty
    //true = occupied
    let boardSpace = {
        0: false, 
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false
    }

    function winnerO(text, win) {
        if (boardSpace[0] === text && boardSpace[1] === text && boardSpace[2] === text) {
            modal.style.display = "block";
        } else if (boardSpace[3] === text && boardSpace[4] === text && boardSpace[5] === text) {
            modal.style.display = "block";
        } else if (boardSpace[6] === text && boardSpace[7] === text && boardSpace[8] === text) {
            modal.style.display = "block";
        } else if (boardSpace[0] === text && boardSpace[3] === text && boardSpace[6] === text) {
            modal.style.display = "block";
        } else if (boardSpace[1] === text && boardSpace[4] === text && boardSpace[7] === text) {
            modal.style.display = "block";        
        } else if (boardSpace[2] === text && boardSpace[5] === text && boardSpace[8] === text) {
            modal.style.display = "block";
        } else if (boardSpace[0] === text && boardSpace[4] === text && boardSpace[8] === text) {
            modal.style.display = "block";
        } else if (boardSpace[2] === text && boardSpace[4] === text && boardSpace[6] === text) {
            modal.style.display = "block";
        } else if (player.gameCount === 5) {
            modal.style.display = "block";
            //tie
        }
    }

    function checkForWin() {
        winnerO('trueX', 'X Wins');
        winnerO('trueO', 'O Wins');
    }

    player.isTurn = true;
    
    sections_btn.map((button, e) => {
        gameBoard.push(e);
        button.addEventListener('click', (e) => {
            let lastChar = parseInt(e.target.id.substr(e.target.id.length - 1));
    
            function boardButton() {
                if (player.isTurn) {
                    if (e.target.textContent === '') {
                        e.target.textContent = 'X';
                        player.gameCount++;
                        player.isTurn = false;
                        computer.isTurn = true;
                        boardSpace[lastChar] = true + 'X';
                        checkForWin();
                    }
                } else if (computer.isTurn) {
                    if (e.target.textContent === '') {
                        e.target.textContent = 'O';
                        computer.gameCount++;
                        computer.isTurn = false;
                        player.isTurn = true;
                        boardSpace[lastChar] = true + 'O';
                        checkForWin();
                    }
                }
                console.log('Player Count: ' + player.gameCount + player.isTurn);
                console.log('Computer Count: ' + computer.gameCount + computer.isTurn)
                console.log(lastChar);
                console.log('space: ' + boardSpace[lastChar]);
                // console.log('sign: ' + boardSign[lastChar]);
            }

            function drawBoard() {
                switch (gameBoard[lastChar]) {
                    case 0:
                        boardButton();
                        break;
                    case 1:
                        boardButton();
                        break;
                    case 2:
                        boardButton();
                        break;
                    case 3:
                        boardButton();
                        break;
                    case 4:
                        boardButton();
                        break;
                    case 5:
                        boardButton();
                        break;
                    case 6:
                        boardButton();
                        break;
                   case 7:
                        boardButton();
                        break;
                    case 8:
                        boardButton();
                        break;
                }
            }
            drawBoard();
        })
    })
})

// const Gameboard = (function () {
//     let gameBoard = [];

//     let player = { isTurn: false, gameCount: 0 }

//     let computer = { isTurn: false, gameCount: 0 }
    
//     sections_btn.map((button, e) => {
//         gameBoard.push(e);
//         button.addEventListener('click', (e) => {
//             let lastChar = parseInt(e.target.id.substr(e.target.id.length - 1));

//             function boardButton() {
//                 if (player.isTurn) {
//                     if (e.target.textContent === '') {
//                         e.target.textContent = 'X';
//                         player.gameCount++;
//                         player.isTurn = false;
//                         computer.isTurn = true;
//                     }
//                 } else if (computer.isTurn) {
//                     if (e.target.textContent === '') {
//                         e.target.textContent = 'O';
//                         computer.gameCount++;
//                         computer.isTurn = false;
//                         player.isTurn = true;
//                     }
//                 }
//                 console.log('Player Count: ' + player.gameCount + player.isTurn);
//                 console.log('Computer Count: ' + computer.gameCount+ computer.isTurn)
//                 console.log(lastChar);
//             }

//             function drawBoard() {
//                 switch (gameBoard[lastChar]) {
//                     case 0:
//                         boardButton();
//                         break;
//                     case 1:
//                         boardButton();
//                         break;
//                     case 2:
//                         boardButton();
//                         break;
//                     case 3:
//                         boardButton();
//                         break;
//                     case 4:
//                         boardButton();
//                         break;
//                     case 5:
//                         boardButton();
//                         break;
//                     case 6:
//                         boardButton();
//                         break;
//                    case 7:
//                         boardButton();
//                         break;
//                     case 8:
//                         boardButton();
//                         break;
//                 }
//             }
//             drawBoard();
//         })
//     })

//     reset_btn.addEventListener('click', () => {
//         sections_btn.map((button, e) => {
//             button.textContent = ''
//         })
//         player.isTurn = false;
//         computer.isTurn = false;
//         player.gameCount = 0;
//         computer.gameCount = 0;
//     })

//     test_btn.addEventListener('click', () => {
//         console.log(computerUpdate());


//     });

    
    
//     function computerUpdate() {
//         let randomInt = Math.floor(Math.random() * 9) + 1;
//         return randomInt;
//     }
    

//     const startGame = () => {
//         player.isTurn = true;
//     }

//     start_btn.addEventListener('click', startGame);

// })();