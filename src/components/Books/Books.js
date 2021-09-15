import { useEffect, useState } from "react";
import { database } from "../../services/firebase-config";
import { ref, onValue } from "firebase/database";
import BookCard from "./BookCard/BookCard";
import BookPreloader from "./BookPreloader/BookPreloader";
import BookInfo from "./BookInfo/BookInfo";
import styles from "./Books.module.scss";
import Categories from "./Categories/Categories";

const Books = () => {
  const [books, setBooks] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]);

  const setCategories = (category) => {
    activeCategories.includes(category)
      ? setActiveCategories(
          activeCategories.filter(
            (activeCategory) => activeCategory !== category
          )
        )
      : setActiveCategories([...activeCategories, category]);
  };

  useEffect(() => {
    const bookRef = ref(database, "books");
    onValue(
      bookRef,
      (snapshot) => {
        const data = snapshot.val();
        setBooks(data);
      },
      { onlyOnce: true }
    );
  }, []);

  let bookElements = null;
  if (!books)
    bookElements = new Array(35).fill(0).map((_, index) => (
      <BookCard key={index}>
        <BookPreloader />
      </BookCard>
    ));
  else if (activeCategories.length === 0)
    bookElements = books.map((book) => (
      <BookCard key={book.title}>
        <BookInfo book={book} />
      </BookCard>
    ));
  else {
    const selectedBooks = books.filter((book) =>
      activeCategories.some((category) =>
        book.categories.includes(category.toLowerCase())
      )
    );
    bookElements = selectedBooks.map((book) => (
      <BookCard key={book.title}>
        <BookInfo book={book} />
      </BookCard>
    ));
  }

  return (
    <>
      <Categories setCategories={setCategories} />
      <div className={styles.BookCardsContainer}>{bookElements}</div>
    </>
  );
};

export default Books;
