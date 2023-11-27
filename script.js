function createPlayer(name){
    const first = false
    const toggleFirst = () => !first;
    const isFirst = () => first
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

function game(){
    const gameDisplay = arrayBoard();
    const player1 = createPlayer('player1')
    player1.toggleFirst()
    const player2 = createPlayer('player2')

    const turn = () => {
        if(player1.isFirst()){
            gameDisplay.xTurn(0)
        }
        else{
            gameDisplay.oTurn(0)
        }

        player1.toggleFirst()
        player2.toggleFirst()
    }

    function checkWinners(){
        gameDisplay.printBoard()
        boardArray=gameDisplay.board
        for(let i  = 0; i < 9; i=i+3){
            if(boardArray[i] == boardArray[i+1] && boardArray[i+2] == boardArray[i] && boardArray[i] != '.'){
                return (`${boardArray[i]} wins`)
            }
        }

        for(let i  = 0; i < 3; i++){
            if(boardArray[i] == boardArray[i+3] && boardArray[i+6] == boardArray[i] && boardArray[i] != '.'){
                return (`${boardArray[i]} wins`)
            }
        }

        if(boardArray[0] == boardArray[4] && boardArray[8] == boardArray[8] && boardArray[8] != '.'){
            return (`${boardArray[0]} wins`)
        }

        else if(boardArray[2] == boardArray[4] && boardArray[6] == boardArray[6] && boardArray[6] != '.'){
            return (`${boardArray[2]} wins`)
        }
    }

    return Object.assign({turn}, {checkWinners}, gameDisplay)
}

const gamer = game()
gamer.checkWinners()
gamer.oTurn(0)
gamer.oTurn(3)
gamer.oTurn(6)
console.log(gamer.checkWinners())

