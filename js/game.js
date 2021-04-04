// iniciar minhas variaveis

let board = ['','','','','','','','','']; //representa cada square vazio
let playerTime = 0; //representa qual player esta jogando 0 ou 1
let symbols = ['o', 'x']; //representa o simbolo do player(escudo ou espada)
let gameOver = false; //variavel que verifica se o jogo ja acabou
let name1, name2;
let v1 = 0, v2 = 0, empate = 0;
let winStates = [
    //possiveis vitorias
    [0,1,2],
    [3,4,5],
    [5,6,7],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(position) {

    if(gameOver) { //verifica se a variavel gameOver eh verdaderia, assim encerrando o jogo
        return;
    }

    if(board[position] == ''){  //caso a posicao acessada esteja vazia, fazer:
        board[position] = symbols[playerTime]; //a posicao clicada recebe o simbolo do player atual, podendo ser espada ou escudo
        
        gameOver = isWin(); // a variavel gameOver chamada um funcao que verifica se o jogo acabou ou nao

        if(gameOver == false) { //caso gameOver seja igual a falso, faca isso
            
            playerTime = (playerTime == 0) ? 1 : 0; //faz a funcao de trocar o player, colocando o numero 0 ou 1 na variavel

        }
    }
    
    return gameOver;
}

function isWin() { //verifica se aconteceu uma jogada vencedora

    for(let i = 0; i < winStates.length; i++) { 
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }

    }

    return false;
}

function reset() {
    board = ['','','','','','','','','']; //representa cada square vazio
    playerTime = 0; //representa qual player esta jogando 0 ou 1
    symbols = ['o', 'x']; //representa o simbolo do player(escudo ou espada)
    gameOver = false;
    square = document.querySelectorAll(".square")
    square.forEach(squares => {
        squares.innerHTML = ``;
    });
}
