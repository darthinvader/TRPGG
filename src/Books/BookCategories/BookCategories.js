import BookCategory from "./BookCategory";

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

  return <div className="categories">{categoryElements}</div>;
};

export default BookCategories;
