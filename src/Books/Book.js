class Book {
  #categories = [];

  constructor(title) {
    this.title = title;
    this.description = "";
    this.imgUrl = "";
    this.documentUrl = "";
  }

  setValue(col, inputValue) {
    if (col === 2) {
      this.description = inputValue;
    } else if (col === 3) {
      this.imgUrl = inputValue;
    } else if (col === 4) {
      this.documentUrl = inputValue;
    } else if (col === 5) {
      this.categories = inputValue;
    }
  }

  set categories(categories) {
    categories = categories.replace(/ /g, "");
    this.#categories = categories.split(",");
  }

  get categories() {
    return this.#categories;
  }
}

export const bookDataCleaner = (data) => {
  return data.reduce((accumulator, currentValue, index, array) => {
    // gs$cell is the key for the current cell
    let { row, col, inputValue } = currentValue["gs$cell"];

    col = +col;
    row = +row;
    // Guard clause
    if (row <= 1) return accumulator;

    if (col === 1) {
      accumulator.push(new Book(inputValue));
    } else {
      const index = accumulator.length - 1;
      accumulator[index].setValue(col, inputValue);
    }
    return accumulator;
  }, []);
};

export default Book;
