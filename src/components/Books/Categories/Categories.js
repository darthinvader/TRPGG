import BookCategory from "./Category/Category";
import styles from "./Categories.module.scss";
const Categories = ({ setCategories }) => {
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

  return <div className={styles.Categories}>{categoryElements}</div>;
};

export default Categories;
