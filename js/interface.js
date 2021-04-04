document.addEventListener('DOMContentLoaded', ()=> {

    name1 = insertName();
    name2 = insertName();

    scoreBoard();


    let squares = document.querySelectorAll(".square"); 

    squares.forEach((square)=> { 
        square.addEventListener('click', handleClick); 
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position)) {
        
        setTimeout(() => { 
            winner();
            reset();
            scoreBoard();
        }, 1)
    }
    updateSquare(position); 
}

function updateSquare(position) {

    let square = document.getElementById(position.toString()); 
    let symbol = board[position]; 
    square.innerHTML = `<div class='${symbol}'></div>`; 

}

function restartGame() {
    button = document.getElementById("restart")
    button.addEventListener('click', reset());
}

function insertName() {
    return window.prompt("Enter your name: ");
}

function scoreBoard() {
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");

    p1.innerHTML = name1 + ":" + v1;
    p2.innerHTML = name2 + ":" + v2;
}

function winner() {
    if(playerTime == 0) {
        alert("Vitória de " + name1);
        v1++;
    } else {
        alert("Vitória de " + name2);
        v2++;
    }
}