const sections_btn = Array.from(document.querySelectorAll('.section'));
const reset_btn = document.querySelector('.resetButton');
const start_btn = document.querySelector('.startButton');
const test_btn = document.querySelector('.test');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var header = document.querySelector('.modal-header');

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]


const Gameboard = (function () {
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
            header.textContent = win;
        } else if (boardSpace[3] === text && boardSpace[4] === text && boardSpace[5] === text) {
            modal.style.display = "block";
            header.textContent = win;
        } else if (boardSpace[6] === text && boardSpace[7] === text && boardSpace[8] === text) {
            modal.style.display = "block";
            header.textContent = win;
        } else if (boardSpace[0] === text && boardSpace[3] === text && boardSpace[6] === text) {
            modal.style.display = "block";
            header.textContent = win;
        } else if (boardSpace[1] === text && boardSpace[4] === text && boardSpace[7] === text) {
            modal.style.display = "block";   
            header.textContent = win;
        } else if (boardSpace[2] === text && boardSpace[5] === text && boardSpace[8] === text) {
            modal.style.display = "block";
            header.textContent = win;
        } else if (boardSpace[0] === text && boardSpace[4] === text && boardSpace[8] === text) {
            modal.style.display = "block";
            header.textContent = win;
        } else if (boardSpace[2] === text && boardSpace[4] === text && boardSpace[6] === text) {
            modal.style.display = "block";
            header.textContent = win;
        } else if (player.gameCount === 5) {
            modal.style.display = "block";
            header.textContent = 'Tie';
        }
    }

    function checkForWin() {
        winnerO('trueX', 'You Win!');
        winnerO('trueO', 'You Lose');
    }
    
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
                        computerUpdate();
                        checkForWin();
                    }
                }
                console.log('Player Count: ' + player.gameCount + player.isTurn);
                console.log('Computer Count: ' + computer.gameCount + computer.isTurn)
                console.log(lastChar);
                console.log('space: ' + boardSpace[lastChar]);
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

    reset_btn.addEventListener('click', () => {
        sections_btn.map((button, e) => {
            button.textContent = ''
        })
        player.isTurn = false;
        computer.isTurn = false;
        player.gameCount = 0;
        computer.gameCount = 0;
        
        Object.keys(boardSpace).forEach(function(key){ boardSpace[key] = false });
    })
    
    function computerUpdate() {
        let randomInt = Math.floor(Math.random() * 9);
        function cpDraw(section) {
            if (boardSpace[section] === false) {
                sections_btn[section].textContent = 'O';
                boardSpace[section] = true + 'O';
            } else {
                console.log('occupied');
                if (boardSpace[0] === false) {
                    sections_btn[0].textContent = 'O';
                    boardSpace[0] = true + 'O';
                } else if (boardSpace[1] === false) {
                    sections_btn[1].textContent = 'O';
                    boardSpace[1] = true + 'O';
                } else if (boardSpace[2] === false) {
                    sections_btn[2].textContent = 'O';
                    boardSpace[2] = true + 'O';
                } else if (boardSpace[3] === false) {
                    sections_btn[3].textContent = 'O';
                    boardSpace[3] = true + 'O';
                } else if (boardSpace[4] === false) {
                    sections_btn[4].textContent = 'O';
                    boardSpace[4] = true + 'O';
                } else if (boardSpace[5] === false) {
                    sections_btn[5].textContent = 'O';
                    boardSpace[5] = true + 'O';
                } else if (boardSpace[6] === false) {
                    sections_btn[6].textContent = 'O';
                    boardSpace[6] = true + 'O';
                } else if (boardSpace[7] === false) {
                    sections_btn[7].textContent = 'O';
                    boardSpace[7] = true + 'O';
                } else if (boardSpace[9] === false) {
                    sections_btn[8].textContent = 'O';
                    boardSpace[8] = true + 'O';
                }
            }
            player.isTurn = true;
        }

        switch (randomInt) {
            case 0:
                cpDraw(0)
                break;
            case 1:
                cpDraw(1)
                break;
            case 2:
                cpDraw(2)
                break;
            case 3:
                cpDraw(3)
                break;
            case 4:
                cpDraw(4)
                break;
            case 5:
                cpDraw(5)
                break;
            case 6:
                cpDraw(6)
                break;
            case 7:
                cpDraw(7)
                break;
            case 8:
                cpDraw(8)
                break;
        }
    }
    
    const startGame = () => {
        player.isTurn = true;
    }

    start_btn.addEventListener('click', startGame);
})();