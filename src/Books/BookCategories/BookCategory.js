import { useState } from "react";
import styles from "./ΒookCategory.module.scss";

const BookCategory = ({ category, clicked }) => {
  const [active, setActive] = useState(false);
  const setCategory = () => {
    clicked(category);
    setActive(!active);
  };
  const classes = [
    styles.BookCategory,
    active ? styles.BookCategory__active : "",
  ].join(" ");

  return (
    <span onClick={setCategory} className={classes}>
      {category}
    </span>
  );
};

export default BookCategory;
