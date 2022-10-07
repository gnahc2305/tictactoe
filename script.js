const sections_btn = Array.from(document.querySelectorAll('.section'));
const reset_btn = document.querySelector('.resetButton');

const Gameboard = (function () {
    // let gameBoard = [0, 1, 2, 
    //                  3, 4, 5,
    //                  6, 7, 8];

    let gameBoard = [];

    let players = [
        {
            player: 'user',
            isTurn: false
        },
        {
            plauer: 'computer',
            isTurn: false
        }
    ];
    
    sections_btn.map((button, e) => {
        gameBoard.push(e);
        button.addEventListener('click', (e) => {
            let lastChar = parseInt(e.target.id.substr(e.target.id.length - 1));
            // console.table(gameBoard[lastChar])

            function drawBoard() {
                switch (gameBoard[lastChar]) {
                    case 0:
                        // console.log(lastChar)
                        e.target.textContent = 'X'
                        break;
                    case 1:
                        e.target.textContent = 'X'
                        break;
                   case 2:
                        e.target.textContent = 'X'
                    break;
                    case 3:
                        e.target.textContent = 'X'
                        break;
                   case 4:
                        e.target.textContent = 'X'
                        break;
                    case 5:
                        e.target.textContent = 'X'
                        break;
                    case 6:
                        e.target.textContent = 'X'
                        break;
                   case 7:
                        e.target.textContent = 'X'
                        break;
                    case 8:
                        e.target.textContent = 'X'
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