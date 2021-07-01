import "core-js/es/array";
import regeneratorRuntime from "regenerator-runtime";
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

const getGoogleSheet = async function () {
  const googleSheet = await fetch(
    "https://spreadsheets.google.com/feeds/cells/1mGh5t6i60bacULLWMz3uPZZNiA_8HWz79cBC0IEQBj0/1/public/full?alt=json"
  );
  const finalJson = await googleSheet.json();
  return finalJson["feed"]["entry"];
};

const parseData = async (data) => {
  data = await data;
  return data.reduce((accumulator, currentValue, index, array) => {
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

const data = getGoogleSheet();
const books = parseData(data);
export default books;
