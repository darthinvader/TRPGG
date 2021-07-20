import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <div className={styles.BookCard}>
      <a
        target="_blank"
        rel="noreferrer"
        href={book.documentUrl}
        className={styles.Link}
      >
        <img
          src={book.imgUrl}
          alt={`${book.title}Cover`}
          className={styles.Img}
        />
        <h2 className={styles.Title}>{book.title}</h2>
        <p className={styles.Description}>{book.description}</p>
      </a>
    </div>
  );
};

export default BookCard;
