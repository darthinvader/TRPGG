import styles from "./NameGenerators.module.scss";

const NameGenerators = () => {
  const categories = [
    "Fantasy & Folklore",
    "Real Names",
    "Places & Locations",
    "Other Names",
    "Description Generators",
    "Other Gens",
  ];
  const categoriesElement = categories.map((category) => {
    return <li className={styles.Category}>{category}</li>;
  });
  return <ul className={styles.Categories}>{categoriesElement}</ul>;
};

export default NameGenerators;
