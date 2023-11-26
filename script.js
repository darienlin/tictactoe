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
    const gameDisplay =  arrayBoard();
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

    const checkWinners = () =>{
        gameDisplay.printBoard()
        if(gameDisplay[0] === gameDisplay[1] && gameDisplay[1] === gameDisplay[2] )
            console.log(gameDisplay[0] + ' wins')
        else if(gameDisplay[3] === gameDisplay[4] && gameDisplay[4] === gameDisplay[5])
            return gameDisplay[3] + ' wins'
        else if(gameDisplay[8] === gameDisplay[7] && gameDisplay[7] === gameDisplay[6])
            return gameDisplay[8] + ' wins'
        else if(gameDisplay[0] === gameDisplay[4] && gameDisplay[4] === gameDisplay[7])
            return gameDisplay[0] + ' wins'
        else if(gameDisplay[1] === gameDisplay[5] && gameDisplay[5] === gameDisplay[8])
            return gameDisplay[1] + ' wins'
        else if(gameDisplay[2] === gameDisplay[6] && gameDisplay[6] === gameDisplay[9])
            return gameDisplay[0] + ' wins'
        else if(gameDisplay[0] === gameDisplay[4] && gameDisplay[4] === gameDisplay[8])
            return gameDisplay[0] + ' wins'
        else if(gameDisplay[2] === gameDisplay[4] && gameDisplay[4] === gameDisplay[7])
            return gameDisplay[0] + ' wins'
    }

    return Object.assign({turn}, {checkWinners}, gameDisplay)
}

const gamer = game()
gamer.checkWinners()

