const sections_btn = Array.from(document.querySelectorAll('.section'));
const reset_btn = document.querySelector('.resetButton');
const start_btn = document.querySelector('.startButton');
const test_btn = document.querySelector('.test');


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
                        boardSpace[lastChar] = true;
                        computerUpdate();
                    }
                } else if (computer.isTurn) {
                    // if (e.target.textContent === '') {
                    //     e.target.textContent = 'O';
                    //     computer.gameCount++;
                    //     computer.isTurn = false;
                    //     player.isTurn = true;
                    //     boardSpace[lastChar] = true;
                    // }
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

    test_btn.addEventListener('click', () => {
        // console.log(computerUpdate());
        computerUpdate();
    });

    
    
    function computerUpdate() {
        let randomInt = Math.floor(Math.random() * 9);
        function cpDraw(section) {
            if (boardSpace[section] === false) {
                sections_btn[section].textContent = 'O';
                boardSpace[section] = true;
            } else {
                console.log('occupied');
                // console.log(boardSpace[0]);
                if (boardSpace[0] === false) {
                    sections_btn[0].textContent = 'O';
                    boardSpace[0] = true;
                } else if (boardSpace[1] === false) {
                    sections_btn[1].textContent = 'O';
                    boardSpace[1] = true;
                } else if (boardSpace[2] === false) {
                    sections_btn[2].textContent = 'O';
                    boardSpace[2] = true;
                } else if (boardSpace[3] === false) {
                    sections_btn[3].textContent = 'O';
                    boardSpace[3] = true;
                } else if (boardSpace[4] === false) {
                    sections_btn[4].textContent = 'O';
                    boardSpace[4] = true;
                } else if (boardSpace[5] === false) {
                    sections_btn[5].textContent = 'O';
                    boardSpace[5] = true;
                } else if (boardSpace[6] === false) {
                    sections_btn[6].textContent = 'O';
                    boardSpace[6] = true;
                } else if (boardSpace[7] === false) {
                    sections_btn[7].textContent = 'O';
                    boardSpace[7] = true;
                } else if (boardSpace[9] === false) {
                    sections_btn[8].textContent = 'O';
                    boardSpace[8] = true;
                }
            }
            player.isTurn = true;
        }

        // console.log(Object.values(boardSpace))

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


        // console.log([3].includes(randomInt) ? Math.floor(Math.random() * 9) : randomInt);
        
        // if (sections_btn[randomInt].textContent === '') {
        //     sections_btn[randomInt].textContent = 'O';
        // } else if (sections_btn[randomInt].textContent === 'O') {
        //     if ([randomInt].includes(randomInt)) {
        //         let newInt = Math.floor(Math.random() * 9)
        //         sections_btn[[randomInt].includes(newInt) ? Math.floor(Math.random() * 9) : randomInt].textContent = 'O';
        //         // sections_btn[([randomInt].includes(randomInt) ? Math.floor(Math.random() * 9) : randomInt)].textContent = 'O';
        //     }            
        //     console.log(randomInt);
        // }
        // else return;



        // let myArr = sections_btn.map((e) => {
            // console.log(e);
            // button.textContent = 'X';
            // console.log(button.id);
            // console.log(button);
            // e + 1;
        // })
        // console.log(sections_btn[0]);

        // console.log(myArr)
    }
    

    // function game() {
    //     if (player.gameCount === 1 && computer.gameCount === 0) {
    //         computer.isTurn = true;
    //     }
    //     if (computer.gameCount === 1) {
    //         player.isTurn = true;
    //         // computer.isTurn = false;
    //     }
    //     if (player.count === 2) {
    //         computer.isTurn = true;
    //     }
    // }

    const startGame = () => {
        player.isTurn = true;
    }

    start_btn.addEventListener('click', startGame);

})();