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





