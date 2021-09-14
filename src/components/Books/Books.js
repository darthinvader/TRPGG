import { useEffect, useState } from "react";
import { database } from "../../services/firebase-config";
import { ref, onValue } from "firebase/database";
// import styles from "./Books.module.scss";

const Books = () => {
  const [books, setBooks] = useState(undefined);
  useEffect(() => {
    const bookRef = ref(database, "books");
    onValue(bookRef, (snapshot) => {
      const data = snapshot.val();
      setBooks(data);
    });
  }, []);

  return <div></div>;
};

export default Books;
