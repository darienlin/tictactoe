function createPlayer(name) {
    let first = false
    const toggleFirst = () => first = !first;
    const isFirst = () => first;
    return { name, toggleFirst, isFirst }
}

function arrayBoard() {
    const board = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    const xTurn = (place) => board[place] = 'x';
    const oTurn = (place) => board[place] = 'o';
    const printBoard = () => {
        var currGame = ''
        for (let i = 1; i < 10; i++) {
            currGame = currGame + board[i - 1]
            if (i % 3 == 0)
                currGame = currGame + '\n'
        }
        console.log(currGame)
    }
    return { board, xTurn, oTurn, printBoard }
}

function checkWinners(gameDisplay) {
    gameDisplay.printBoard()
    boardArray = gameDisplay.board
    displayMessage = 'no one has won'
    document.querySelector('#title').innerText = displayMessage
    winYet = false
    for (let i = 0; i < 9; i = i + 3) {
        if (boardArray[i] == boardArray[i + 1] && boardArray[i + 2] == boardArray[i] && boardArray[i] != '.') {
            displayMessage = (`${boardArray[i]} wins`)
            document.querySelector('#title').innerText = displayMessage
            disableButton()
        }
    }

    for (let i = 0; i < 3; i++) {
        if (boardArray[i] == boardArray[i + 3] && boardArray[i + 6] == boardArray[i] && boardArray[i] != '.') {
            displayMessage = (`${boardArray[i]} wins`)
            document.querySelector('#title').innerText = displayMessage
            disableButton()
        }
    }

    if (boardArray[0] == boardArray[4] && boardArray[8] == boardArray[0] && boardArray[8] != '.') {
        displayMessage = (`${boardArray[0]} wins`)
        document.querySelector('#title').innerText = displayMessage
        disableButton()
    }

    else if (boardArray[2] == boardArray[4] && boardArray[6] == boardArray[2] && boardArray[6] != '.') {
        displayMessage = (`${boardArray[2]} wins`)
        document.querySelector('#title').innerText = displayMessage
        disableButton()
    }

    return {winYet, displayMessage}
}

function playerTurn(player1, player2, choice, board) {
    buttonId = ''

    if (choice == 1)
        buttonId = '#one'

    else if (choice == 2)
        buttonId = '#two'

    else if (choice == 3)
        buttonId = '#three'

    else if (choice == 4)
        buttonId = '#four'

    else if (choice == 5)
        buttonId = '#five'

    else if (choice == 6)
        buttonId = '#six'

    else if (choice == 7)
        buttonId = '#seven'

    else if (choice == 8)
        buttonId = '#eight'

    else if (choice == 9)
        buttonId = '#nine'

    if (player1.isFirst()) {
        document.querySelector(buttonId).innerText = 'x'
        board.xTurn(parseInt(choice - 1))
    }
    else {
        document.querySelector(buttonId).innerText = 'o'
        board.oTurn(parseInt(choice - 1))
    }

    player1.toggleFirst()
    player2.toggleFirst()
}

function disableButton(){
    var allBtn = document.querySelectorAll('.xobutton')
    allBtn.forEach(btn => {
        btn.disabled = true
    })
}


function game() {
    const gameDisplay = new arrayBoard();
    const player1 = new createPlayer('player1')
    player1.toggleFirst();
    const player2 = new createPlayer('player2')
    var choice = 0

    var allBtn = document.querySelectorAll('.reset')


    allBtn.forEach(btn => {
        btn.innerHTML = '&nbsp;'
    })

    const btnOne = document.querySelector('#one')
    btnOne.disabled = false
    btnOne.addEventListener('click', () => {
        choice = 1
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnOne.disabled = true

    })

    const btnTwo = document.querySelector('#two')
    btnTwo.disabled = false
    btnTwo.addEventListener('click', () => {
        choice = 2

        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnTwo.disabled = true
    })

    const btnThree = document.querySelector('#three')
    btnThree.disabled = false
    btnThree.addEventListener('click', () => {
        choice = 3
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnThree.disabled = true
    })

    const btnFour = document.querySelector('#four')
    btnFour.disabled = false
    btnFour.addEventListener('click', () => {
        choice = 4
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnFour.disabled = true
    })

    const btnFive = document.querySelector('#five')
    btnFive.disabled = false
    btnFive.addEventListener('click', () => {
        choice = 5
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnFive.disabled = true
    })

    const btnSix = document.querySelector('#six')
    btnSix.disabled = false
    btnSix.addEventListener('click', () => {
        choice = 6
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnSix.disabled = true
    })

    const btnSeven = document.querySelector('#seven')
    btnSeven.disabled = false
    btnSeven.addEventListener('click', () => {
        choice = 7
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnSeven.disabled = true
    })

    const btnEight = document.querySelector('#eight')
    btnEight.disabled = false
    btnEight.addEventListener('click', () => {
        choice = 8
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnEight.disabled = true
    })

    const btnNine = document.querySelector('#nine')
    btnNine.disabled = false
    btnNine.addEventListener('click', () => {
        choice = 9
        playerTurn(player1, player2, choice, gameDisplay)
        checkWinners(gameDisplay)
        btnNine.disabled = true
    })

    displayMessage = checkWinners(gameDisplay).displayMessage

    return Object.assign({ checkWinners }, { displayMessage })
}


