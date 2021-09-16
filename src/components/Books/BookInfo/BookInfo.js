import styles from "./BookInfo.module.scss";

const BookInfo = ({ book }) => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href={book.downloadLink}
        className={styles.Link}
      >
        <img
          src={book.imageUrl}
          alt={`${book.title}Cover`}
          className={styles.Img}
        />
        <h2 className={styles.Title}>{book.title}</h2>
        <p className={styles.Description}>{book.description}</p>
      </a>
    </>
  );
};

export default BookInfo;