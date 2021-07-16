import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { bookDataCleaner } from "./Book";
import BookCategories from "./BookCategories/BookCategories";
import BooksPreloader from "./BooksPreloader/BooksPreloader";

const BooksManager = (props) => {
  const [books, setBooks] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]);

  useEffect(() => {
    const { REACT_APP_BOOKS_LINK: booksLink } = process.env;

    axios.get(booksLink).then((response) => {
      const cleanedData = bookDataCleaner(response.data["feed"]["entry"]);
      setBooks(cleanedData);
    });
  }, []);

  const setCategories = (category) => {
    activeCategories.includes(category)
      ? setActiveCategories(
          activeCategories.filter(
            (activeCategory) => activeCategory !== category
          )
        )
      : setActiveCategories([...activeCategories, category]);
  };

  const bookRender = books ? null : (
    <div className="booksContainer">
      <BooksPreloader />
    </div>
  );

  return (
    <Fragment>
      <BookCategories setCategories={setCategories} />
      {bookRender}
    </Fragment>
  );
};

export default BooksManager;
