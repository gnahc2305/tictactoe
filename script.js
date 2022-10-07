const sections_btn = Array.from(document.querySelectorAll('.section'));

const Gameboard = (function () {
    let gameBoard = [0, 1, 2, 
                     3, 4, 5,
                     6, 7, 8];
    
})();

sections_btn.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
    })
})

