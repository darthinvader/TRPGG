import { useState } from "react";

const BookCategory = ({ category, clicked }) => {
  const [active, setActive] = useState(false);
  const setCategory = () => {
    clicked(category);
    setActive(!active);
  };
  const classes = `bookCategory ${active ? "bookCategory__active" : ""}`;

  return (
    <span onClick={setCategory} className={classes}>
      {category}
    </span>
  );
};

export default BookCategory;
