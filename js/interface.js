document.addEventListener('DOMContentLoaded', ()=> {

    name1 = insertName();
    name2 = insertName();

    scoreBoard();


    let squares = document.querySelectorAll(".square"); // pega todos os quadrados

    squares.forEach((square)=> { // vasculha cada quadrado
        square.addEventListener('click', handleClick); //chama a funcao handleClick para cada click feito nos quadrados
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    // ^ eh a mesma coisa de handleMove(event.target.id);

    if(handleMove(position)) {
        
        setTimeout(() => { // precisa de timeout pois o alert eh mais rapido que a funcao updateSquare
            winner();
            reset();
            scoreBoard();
        }, 1)
    }
    updateSquare(position); // passa position(square.id - o quadrado que esta sendo clicado) para a funcao
}

function updateSquare(position) {

    let square = document.getElementById(position.toString()); // pega a posicao atual, transforma em uma string e armazena na variavel
    let symbol = board[position]; // symbol recebe a posicao atual de board
    square.innerHTML = `<div class='${symbol}'></div>`; //adiciona o simbolo no quadrado atual que foi clicado

    // let squares = document.querySelectorAll(".square");

    // squares.forEach((square)=> {
    //     let position = square.id;
    //     let symbol = board[position];

    //     if(symbol != '') {
    //         square.innerHTML = `<div class='${symbol}'></div>`
    //     }
    // })
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