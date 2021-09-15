import { useEffect, useState } from "react";
import { database } from "../../services/firebase-config";
import { ref, onValue } from "firebase/database";
import BookCard from "./BookCard/BookCard";
import BookPreloader from "./BookPreloader/BookPreloader";
import BookInfo from "./BookInfo/BookInfo";
import styles from "./Books.module.scss";

const Books = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    const bookRef = ref(database, "books");
    onValue(bookRef, (snapshot) => {
      const data = snapshot.val();
      setBooks(data);
    });
  }, []);
  let bookElements = null;
  if (!books)
    bookElements = new Array(35).fill(0).map((_, index) => (
      <BookCard key={index}>
        <BookPreloader />
      </BookCard>
    ));
  else
    bookElements = books.map((book) => (
      <BookCard key={book.title}>
        <BookInfo book={book} />
      </BookCard>
    ));

  return <div className={styles.BookCardsContainer}>{bookElements}</div>;
};

export default Books;
