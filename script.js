const sections_btn = Array.from(document.querySelectorAll('.section'));
const reset_btn = document.querySelector('.resetButton');
const start_btn = document.querySelector('.startButton');


const Gameboard = (function () {
    let gameBoard = [];

    let player = { isTurn: false, gameCount: 0 }

    let computer = { isTurn: false, gameCount: 0 }


    
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
                    }
                    game()
                } else if (computer.isTurn) {
                    e.target.textContent = 'O';
                    computer.gameCount++;
                    computer.isTurn = false;
                }
                console.log(player.gameCount);
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
    })

    
    const startGame = () => {
        player.isTurn = true;
    }

    function game() {
        if (player.gameCount === 1) {
            computer.isTurn = true;
        }
    }
    
    start_btn.addEventListener('click', startGame);

})();

// const gameFlow = (function() {
//     start_btn.addEventListener('click', function() {
//         player.isTurn = true;
//         console.log(player)
//     })
// })();


