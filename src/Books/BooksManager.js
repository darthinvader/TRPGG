import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import bookDataCleaner from "./Book";
import BookCategories from "./BookCategories/BookCategories";
import BookCardsContainer from "./BookCardsContainer/BookCardsContainer";

const BooksManager = (props) => {
  const [books, setBooks] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]);

  // Get Book data
  useEffect(() => {
    const { REACT_APP_BOOKS_LINK: booksLink } = process.env;

    axios.get(booksLink).then((response) => {
      const cleanedData = bookDataCleaner(response.data["feed"]["entry"]);
      setBooks(cleanedData);
    });
  }, []);

  // Get categories
  const setCategories = (category) => {
    activeCategories.includes(category)
      ? setActiveCategories(
          activeCategories.filter(
            (activeCategory) => activeCategory !== category
          )
        )
      : setActiveCategories([...activeCategories, category]);
  };

  return (
    <Fragment>
      <BookCategories setCategories={setCategories} />
      <BookCardsContainer books={books} activeCategories={activeCategories} />
    </Fragment>
  );
};

export default BooksManager;
