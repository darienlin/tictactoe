function createPlayer(name){
    let first = false
    const toggleFirst = () => first=!first;
    const isFirst = () => first;
    return {name, toggleFirst,isFirst}
}

function arrayBoard (){
    const board = ['.','.','.','.','.','.','.','.','.']
    const xTurn = (place) => board[place] = 'x';
    const oTurn = (place) => board[place] = 'o';
    const printBoard = () => {
        var currGame = ''
        for(let i = 1; i < 10; i++){
            currGame = currGame + board[i-1]
            if(i%3==0)
                currGame = currGame + '\n'
        }
        console.log(currGame)
    }
    return {board, xTurn, oTurn, printBoard}
}

function checkWinners(gameDisplay){
    gameDisplay.printBoard()
    boardArray=gameDisplay.board
    var displayMessage = 'No one has won yet'
    winYet = false
    for(let i  = 0; i < 9; i=i+3){
        if(boardArray[i] == boardArray[i+1] && boardArray[i+2] == boardArray[i] && boardArray[i] != '.'){
            displayMessage = (`${boardArray[i]} wins`)
            winYet = true
        }
    }

    for(let i  = 0; i < 3; i++){
        if(boardArray[i] == boardArray[i+3] && boardArray[i+6] == boardArray[i] && boardArray[i] != '.'){
            displayMessage = (`${boardArray[i]} wins`)
            winYet = true
        }
    }

    if(boardArray[0] == boardArray[4] && boardArray[8] == boardArray[0] && boardArray[8] != '.'){
        displayMessage = (`${boardArray[0]} wins`)
        winYet = true
    }

    else if(boardArray[2] == boardArray[4] && boardArray[6] == boardArray[2] && boardArray[6] != '.'){
        displayMessage = (`${boardArray[2]} wins`)
        winYet = true
    }
    return {winYet, displayMessage}
}

function playerTurn(player1, player2, board){
    var choice = prompt("Enter a number: ");
    if(player1.isFirst()){
        board.xTurn(parseInt(choice))
        board.printBoard()
    }
    else{
        board.oTurn(parseInt(choice))
        board.printBoard()
    }

    player1.toggleFirst()
    player2.toggleFirst()
}



function game(){
    const gameDisplay = arrayBoard();
    const player1 = createPlayer('player1')
    player1.toggleFirst();
    const player2 = createPlayer('player2')

    while(!checkWinners(gameDisplay).winYet){
        playerTurn(player1, player2, gameDisplay)
    }

    displayMessage = checkWinners(gameDisplay).displayMessage

    return Object.assign({checkWinners}, {displayMessage})
}

const gamer = game()
gamer.checkWinners
console.log(gamer.displayMessage)

