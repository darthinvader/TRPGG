import { useEffect, useState } from "react";
import { database } from "../../services/firebase-config";
import { ref, onValue } from "firebase/database";
// import SkeletonPreloader from "./SkeletonPreloader/SkeletonPreloader";
import Book from "./Book";
import { Autocomplete, Box, TextField } from "@mui/material";
import SkeletonPreloader from "./SkeletonPreloader";

interface BookInterface {
  title: string;
  imageUrl: string;
  description: string | undefined;
  downloadLink: string;
  categories: string[];
}

const categories = [
  "Base",
  "Classes",
  "Races",
  "Feats",
  "Creatures",
  "Module",
  "Items",
  "Spells",
  "DM",
  "Homebrew",
  "Misc",
];

const Books = () => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

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

  let bookElements: JSX.Element[];

  const skeletonBooks = () =>
    new Array(36)
      .fill(0)
      .map((_, index) => <SkeletonPreloader key={index}></SkeletonPreloader>);

  const allBooks = () =>
    books.map((book) => <Book key={book.title} book={book}></Book>);

  const filterBooks = () => {
    const selectedBooks = books.filter((book) =>
      activeCategories.some((category) =>
        book.categories.includes(category.toLowerCase())
      )
    );
    return selectedBooks.map((book) => (
      <Book key={book.title} book={book}></Book>
    ));
  };

  if (books.length === 0) bookElements = skeletonBooks();
  else if (activeCategories.length === 0) bookElements = allBooks();
  else {
    bookElements = filterBooks();
  }

  return (
    <>
      <Autocomplete
        multiple
        sx={{ margin: "16px" }}
        options={categories}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Categories"
            placeholder="Category"
          />
        )}
        onChange={(event, categories: string[]) => {
          setActiveCategories(categories);
        }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(12em,1fr))",
          gridGap: "16px",
          margin: "16px",
        }}
      >
        {bookElements}
      </Box>
    </>
  );
};

export default Books;
