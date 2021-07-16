const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <a
        target="_blank"
        rel="noreferrer"
        href={book.documentUrl}
        className="bookCard__link"
      >
        <img
          src={book.imgUrl}
          alt={`${book.title}Cover`}
          className="bookCard__img"
        />
        <h2 className="bookCard__title">{book.title}</h2>
        <p className="bookCard__description">{book.description}</p>
      </a>
    </div>
  );
};

export default BookCard;
