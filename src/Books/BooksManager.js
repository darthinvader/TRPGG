import { useEffect, useState } from "react";
import axios from "axios";

const BooksManager = (props) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const { REACT_APP_BOOK_JSON } = process.env;
    axios.get(REACT_APP_BOOK_JSON).then((response) => {
      setBooks(response.data);
    });
  }, []);

  console.log(books);

  return <div>Hello</div>;
};

export default BooksManager;
