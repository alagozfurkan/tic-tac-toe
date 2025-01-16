function cell() {
    //all cells have default value of "0"
    value = 0;

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

    const selam = () => {
        console.log(board);
    }
    

    return {
        selam
    }
}


let selamlar = gameboard();
selamlar.selam();