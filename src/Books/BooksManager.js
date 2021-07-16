import { useEffect, useState } from "react";
import axios from "axios";
import { bookDataCleaner } from "./Book";
import BookCategories from "./BookCategories/BookCategories";

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
      : activeCategories.push(category);
    console.log(activeCategories);
  };

  return <BookCategories setCategories={setCategories} />;
};

export default BooksManager;
