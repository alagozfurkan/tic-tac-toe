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

let game = gameboard();


game.printBoard();

game.placeSign(2, 1, 2)

game.printBoard()

game.resetBoard()

game.printBoard()

game.placeSign(1,1,1)

game.printBoard()