const BookCategory = ({ category, clicked }) => {
  return (
    <span onClick={() => clicked(category)} className="category">
      {category}
    </span>
  );
};

export default BookCategory;
