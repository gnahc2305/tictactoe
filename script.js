const sections_btn = Array.from(document.querySelectorAll('.section'));
const reset_btn = document.querySelector('.resetButton');

const Gameboard = (function () {
    // let gameBoard = [0, 1, 2, 
    //                  3, 4, 5,
    //                  6, 7, 8];

    let gameBoard = [];

    let player = { isTurn: false }

    let computer = { isTurn: false }

    
    
    sections_btn.map((button, e) => {
        gameBoard.push(e);
        button.addEventListener('click', (e) => {
            let lastChar = parseInt(e.target.id.substr(e.target.id.length - 1));
            // console.table(gameBoard[lastChar])

            function drawBoard() {
                switch (gameBoard[lastChar]) {
                    case 0:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        // console.log(lastChar)
                        // if (player.isTurn === false) return;
                        // else {
                        //     e.target.textContent = 'X'
                        // }
                        // console.log(player.isTurn);
                        break;
                    case 1:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                    case 2:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                    case 3:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                    case 4:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                    case 5:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                    case 6:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                   case 7:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
                        break;
                    case 8:
                        player.isTurn ? e.target.textContent = 'X' : false;
                        computer.isTurn ? e.target.textContent = 'O' : false;
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
    })

})();