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
    const placeSign = (place, x) => {
        if (place < 4 && board[0][place - 1].getCellValue() == 0) {
            
            board[0][place - 1].changeCellValue(x);
           
        } else if(place > 3 && place < 7 && board[1][place - 4].getCellValue() == 0) {
            board[1][place - 4].changeCellValue(x);

        } else if (place > 6 && board[2][place - 7].getCellValue() == 0) {
            board[2][place - 7].changeCellValue(x);
        } else return "cant"
        
        
        // else if (board[row - 1][column - 1].getCellValue() == 1 || board[row - 1][column - 1].getCellValue() == 2) {return "cant"}
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





const playGame =( function () {
    
    let game = gameboard();
    let board = game.getBoard();

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
        
        
        for (let i = 0; i < 3; i++) {
            let row = board[i]
            for (let j = 0; j < 1; j++) {
                if (!(row[j].getCellValue() == 0) && (row[j].getCellValue() == row[j+1].getCellValue()) && (row[j].getCellValue() == row[j+2].getCellValue())) {
                    console.log(`${activePlayer.name} is won!!!`);
                    activePlayer = players[1];
                    game.resetBoard();
                    return
                }
            }
            
        }

        
        for (let j = 0; j < 3; j++) {
            if (!(board[0][j].getCellValue() == 0) && (board[0][j].getCellValue() == board[1][j].getCellValue()) && (board[0][j].getCellValue() == board[2][j].getCellValue())) {
                console.log(`${activePlayer.name} is won!!!`);
                activePlayer = players[1];
                game.resetBoard();
                return
            }
                
        
            
        }

        if (!(board[0][0].getCellValue() == 0) && (board[0][0].getCellValue() == board[1][1].getCellValue()) && (board[0][0].getCellValue() == board[2][2].getCellValue())) {
            console.log(`${activePlayer.name} is won!!!`);
            activePlayer = players[1];
            game.resetBoard();
            return
        }

        if (!(board[0][2].getCellValue() == 0) && (board[0][2].getCellValue() == board[1][1].getCellValue()) && (board[0][2].getCellValue() == board[2][0].getCellValue())) {
            console.log(`${activePlayer.name} is won!!!`);
            activePlayer = players[1];
            game.resetBoard();
            return
        }
        
    }   

    const playRound = (place) => {
        console.log(`It's ${activePlayer.name}s turn`)
        if (game.placeSign(place, activePlayer.token) == "cant") {
            return;
        }
        game.placeSign(place, activePlayer.token)
        console.log(`Placed the sign in ${place} location`)
        game.printBoard()
        
        winChecker();
        roundIt()
        
        
    }

    const loanBoard = () => {
        return board;
    }

    const displayBoard = () => {
        
        const container = document.querySelector(".container");
        board.forEach((array) => array.forEach((element) => {
            let newButton = document.createElement("button");
            //this is not working fix this
            newButton.textContent = element.getCellValue();
            container.appendChild(newButton);
        }))
    }

    return {
        playRound,
        displayBoard,
        loanBoard
       
    }
})();


function playGameInDOM() {
    const board = playGame.loanBoard();
    const container = document.querySelector(".container");
    let boxes = container.childNodes;


    //this is creating the board we should also have a method for just updating the board
    const displayBoard = () => {
        container.textContent = ""
        
        board.forEach((array) => array.forEach((element) => {
            let newButton = document.createElement("button");
            newButton.textContent = element.getCellValue();
            container.appendChild(newButton);
            
        }))
        
        for (let i = 0; i < 9; i++) {
            
            boxes[i].addEventListener("click", () => {
                
                playGame.playRound(i + 1);
                displayBoard();
                
            } )
            
        }
        
    }


    

    

    
    
    //const takeInputFromUi = (place) => {
    //    playGame.playRound(place)

    //}


    return {
        displayBoard,
        
    }

}








 

const asss = playGameInDOM();
asss.displayBoard()




