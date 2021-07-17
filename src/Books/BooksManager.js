import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import bookDataCleaner from "./Book";
import BookCategories from "./BookCategories/BookCategories";
import BooksPreloader from "./BooksPreloader/BooksPreloader";
import BookCardsContainer from "./BookCardsContainer/BookCardsContainer";

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

  const bookRender = books ? (
    <BookCardsContainer books={books} activeCategories={activeCategories} />
  ) : (
    <BooksPreloader />
  );

  return (
    <Fragment>
      <BookCategories setCategories={setCategories} />
      <div className="bookCardsContainer">{bookRender}</div>
    </Fragment>
  );
};

export default BooksManager;
