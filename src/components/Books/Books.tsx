import { useEffect, useState } from "react";
import { database } from "../../services/firebase-config";
import { ref, onValue } from "firebase/database";
import SkeletonPreloader from "./SkeletonPreloader/SkeletonPreloader";

const Books = () => {
  const [books, setBooks] = useState(null);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const setCategories = (category: string) => {
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

  return <SkeletonPreloader />;
};

export default Books;
