import styles from "./Generators.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
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
    return (
      <li className={styles.Category}>
        {category}
        <IoMdArrowDropdown />
      </li>
    );
  });
  return <ul className={styles.Categories}>{categoriesElement}</ul>;
};

export default NameGenerators;
