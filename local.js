const local_btn = document.querySelector('.localButton');
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

local_btn.addEventListener('click', () => {
    local_btn.style.backgroundColor = '#2EA043';

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

    const startGame = () => {
        player.isTurn = true;
    }

    start_btn.addEventListener('click', startGame);

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
        } else if (player.gameCount + computer.gameCount === 9) {
            modal.style.display = "block";
            header.textContent = 'Tie';
        }
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
                        winnerO('trueX', 'You Win!');
                        winnerO('trueO', 'You Lose');
                    }
                } else if (computer.isTurn) {
                    if (e.target.textContent === '') {
                        e.target.textContent = 'O';
                        computer.gameCount++;
                        computer.isTurn = false;
                        player.isTurn = true;
                        boardSpace[lastChar] = true + 'O';
                        winnerO('trueX', 'You Win!');
                        winnerO('trueO', 'You Lose');
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