import { useEffect, useState } from "react";
import { database } from "../../services/firebase-config";
import { ref, onValue } from "firebase/database";
// import SkeletonPreloader from "./SkeletonPreloader/SkeletonPreloader";
import Book from "./Book/Book";
import { Box } from "@mui/material";
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

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(10em,1fr))",
        gridGap: "16px",
        margin: "16px",
      }}
    >
      <SkeletonPreloader />
      <SkeletonPreloader />
      <SkeletonPreloader />
      <SkeletonPreloader />
      <SkeletonPreloader />
      <SkeletonPreloader />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      {/*
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />
      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      />

      <Book
        book={{
          title: "Mordenkainens Tome of Foes",
          imageUrl: "https://i.imgur.com/wzQYzkUm.jpg",
          downloadLink: "Smth",
          description: "Hello threre",
        }}
      /> */}
    </Box>
  );
};

export default Books;
