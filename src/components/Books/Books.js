import { useEffect, useState } from "react";
import { database, ref, onValue } from "../../services/firebase-config";
import styles from "./Books.module.scss";

const Books = () => {
  const [books, setBooks] = useState(undefined);
  useEffect(() => {
    const bookRef = ref(database, "books");
    onValue(bookRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setBooks(data);
    });
  }, []);
};

export default Books;
