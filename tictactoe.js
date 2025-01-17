function cell() {
    //all cells have default value of "0"
    value = 0;  //explain this: if you don't put let in here when a cell's value change all the cell values are changing why? when you
    // put let before it it does not change why is this?

    //you can change the value of the cell
    const changeCellValue = (sign) => {
        value = sign;
    }
    // you can get the current value of the cell
    const getCellValue = () => {
        return value
    }

    return {
        changeCellValue,
        getCellValue
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

    const placeSign = (column, row, x) => {
        if (board[column][row].getCellValue() == 0) {
            console.log(board[column][row].getCellValue())
            board[column][row].changeCellValue(x);
            console.log(board[column + 1][row].getCellValue())
        }
    }
    
    const printBoard = () => {

        const extractedBord = board.map((row) => row.map((x) => x.getCellValue()))
        console.log(extractedBord);
      
    }

    return {
        placeSign,
        printBoard
    }
}

let game = gameboard();

game.placeSign(1,2, "a");
game.printBoard()