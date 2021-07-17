import BookCategory from "./BookCategory";
import styles from "./BookCategories.module.scss";
const BookCategories = ({ setCategories }) => {
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
  ];

  const categoryElements = categories.map((category) => {
    return (
      <BookCategory
        key={category}
        category={category}
        clicked={setCategories}
      />
    );
  });

  return <div className={styles.BookCategories}>{categoryElements}</div>;
};

export default BookCategories;
