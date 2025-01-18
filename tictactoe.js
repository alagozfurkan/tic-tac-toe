function cell() {
    //all cells have default value of "0"
    let value = 0;  //explain this: if you don't put let in here when a cell's value change all the cell values are changing why? when you
    // put let before it it does not change why is this?

    //you can change the value of the cell
    const changeCellValue = (sign) => {
        value = sign;
    }
    // you can get the current value of the cell
    const getCellValue = () => {
        return value
    }

    const resetCellValue = () => {
        value = 0;
    }


    return {
        changeCellValue,
        getCellValue,
        resetCellValue
    }
}


function gameboard() {
    let board = [];

    //create the board
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push(cell());
            
        }
        
    }

    // place sign on the board
    const placeSign = (row, column, x) => {
        if (board[row - 1][column - 1].getCellValue() == 0) {
            
            board[row - 1][column - 1].changeCellValue(x);
           
        }
    }
    
    // log the board 
    const printBoard = () => {

        const extractedBord = board.map((row) => row.map((x) => x.getCellValue()))
        console.log(extractedBord);
      
    }

    const getBoard = () => {
        return board
    }

    const resetBoard = () => {
        board.forEach((row) => row.forEach((element) => element.resetCellValue()))
    }


    return {
        placeSign,
        printBoard,
        getBoard,
        resetBoard
    }
}

function playGame() {
    
    let game = gameboard()

    //array for changing the round
    players = [
        {
            name: "playlerone",
            token: 1
        },

        {
            name: "playertwo",
            token: 2
        }
    ]

    let activePlayer = players[0];

    const roundIt = () => {
        if (activePlayer == players[0]) {
            activePlayer = players[1]
        } else {
            activePlayer = players[0]
        }
    }

    

    const winChecker = () => {
        let board = game.getBoard();
        
        for (let i = 0; i < 3; i++) {
            let row = board[i]
            for (let j = 0; j < 1; j++) {
                if (!(row[j].getCellValue() == 0) && (row[j].getCellValue() == row[j+1].getCellValue()) && (row[j].getCellValue() == row[j+2].getCellValue())) {
                    console.log(`${activePlayer.name} is won!!!`);
                    activePlayer = players[0];
                    game.resetBoard();
                    return
                }
            }
            
        }

        
        for (let j = 0; j < 3; j++) {
            if (!(board[0][j].getCellValue() == 0) && (board[0][j].getCellValue() == board[1][j].getCellValue()) && (board[0][j].getCellValue() == board[2][j].getCellValue())) {
                console.log(`${activePlayer.name} is won!!!`);
                activePlayer = players[0];
                game.resetBoard();
                return
            }
                
        
            
        }

        if (!(board[0][0].getCellValue() == 0) && (board[0][0].getCellValue() == board[1][1].getCellValue()) && (board[0][0].getCellValue() == board[2][2].getCellValue())) {
            console.log(`${activePlayer.name} is won!!!`);
            activePlayer = players[0];
            game.resetBoard();
            return
        }

        if (!(board[0][2].getCellValue() == 0) && (board[0][2].getCellValue() == board[1][1].getCellValue()) && (board[0][2].getCellValue() == board[2][0].getCellValue())) {
            console.log(`${activePlayer.name} is won!!!`);
            activePlayer = players[0];
            game.resetBoard();
            return
        }
        
    }   

    const playRound = (row, column) => {
        console.log(`It's ${activePlayer.name}s turn`)
        game.placeSign(row, column, activePlayer.token)
        console.log(`Placed the sign in ${column} x ${row} location`)
        game.printBoard()
        winChecker();

        roundIt()
        console.log(`It's ${activePlayer.name}s turn`)
    }

    return {
        playRound
    }
}

const game = playGame();

game.playRound(1, 2);
game.playRound(1, 3)
game.playRound(2, 2)
game.playRound(1, 1)
game.playRound(3, 2)
