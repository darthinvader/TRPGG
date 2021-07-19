import { Fragment, useEffect, useState, useCallback } from "react";
import axios from "axios";
import bookDataCleaner from "./Book";
import BookCategories from "./BookCategories/BookCategories";
import BookCardsContainer, {
  CANT_LOAD_BOOKS,
} from "./BookCardsContainer/BookCardsContainer";
import ErrorModal from "../ErrorModal/ErrorModal";

const BooksManager = (props) => {
  const [books, setBooks] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]);
  const [error, setError] = useState(false);

  const getBooks = useCallback(() => {
    const { REACT_APP_BOOKS_LINK: booksLink } = process.env;

    axios
      .get(booksLink)
      .then((response) => {
        const cleanedData = bookDataCleaner(response.data["feed"]["entry"]);
        setBooks(cleanedData);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  // Get Book data
  useEffect(() => {
    getBooks();
  }, [getBooks]);

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

  const errorModal = error ? (
    <ErrorModal
      title="Books did not load properly"
      description="Either your network connection is down or the server is down. Page can still be used in offline mode."
      onClose={() => {
        setError(false);
        setBooks(CANT_LOAD_BOOKS);
      }}
      onRetry={() => {
        getBooks();
        setError(false);
      }}
    />
  ) : null;

  return (
    <Fragment>
      <BookCategories setCategories={setCategories} />
      <BookCardsContainer books={books} activeCategories={activeCategories} />
      {errorModal}
    </Fragment>
  );
};

export default BooksManager;
