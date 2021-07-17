import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <div className={styles.BookCard}>
      <a
        target="_blank"
        rel="noreferrer"
        href={book.documentUrl}
        className={styles.BookCard__link}
      >
        <img
          src={book.imgUrl}
          alt={`${book.title}Cover`}
          className={styles.BookCard__img}
        />
        <h2 className={styles.BookCard__title}>{book.title}</h2>
        <p className={styles.BookCard__description}>{book.description}</p>
      </a>
    </div>
  );
};

export default BookCard;
