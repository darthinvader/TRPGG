import { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";

const BooksManager = (props) => {
  const [books, setBooks] = useState(null);

  const bookDataCleaner = (data) => {
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

  useEffect(() => {
    const { REACT_APP_BOOK_JSON } = process.env;
    axios.get(REACT_APP_BOOK_JSON).then((response) => {
      const cleanedData = bookDataCleaner(response.data["feed"]["entry"]);
      setBooks(cleanedData);
    });
  }, []);

  console.log(books);

  return <div>Hello</div>;
};

export default BooksManager;
