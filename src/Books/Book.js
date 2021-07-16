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

export default Book;
