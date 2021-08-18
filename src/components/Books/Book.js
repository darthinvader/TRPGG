const setValue = (book, col, inputValue) => {
  if (col === 2) {
    book.description = inputValue;
  } else if (col === 3) {
    book.imgUrl = inputValue;
  } else if (col === 4) {
    book.documentUrl = inputValue;
  } else if (col === 5) {
    book.categories = inputValue.replace(/ /g, "").split(",");
  }
};

const bookDataCleaner = (data) => {
  return data.reduce((accumulator, currentValue, index, array) => {
    // gs$cell is the key for the current cell
    let { row, col, inputValue } = currentValue["gs$cell"];

    col = +col;
    row = +row;
    // Guard clause
    if (row <= 1) return accumulator;

    if (col === 1) {
      accumulator.push({ title: inputValue });
    } else {
      const index = accumulator.length - 1;
      setValue(accumulator[index], col, inputValue);
    }
    return accumulator;
  }, []);
};

export default bookDataCleaner;
