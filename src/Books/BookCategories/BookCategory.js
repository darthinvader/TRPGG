const BookCategory = ({ category, clicked }) => {
  return (
    <span onClick={() => clicked(category)} className="bookCategory">
      {category}
    </span>
  );
};

export default BookCategory;
