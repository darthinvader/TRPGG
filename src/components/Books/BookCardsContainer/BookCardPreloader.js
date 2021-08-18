import styles from "./BookCardPreloader.module.scss";
import bookStyles from "./BookCard.module.scss";

const BookCardPreloader = () => {
  return (
    <div className={bookStyles.BookCard}>
      <div className={styles.Img__aspectRatioWrapper}>
        <div className={styles.Img}></div>
      </div>
      <div className={styles.Title}></div>
      <div className={styles.Description}></div>
    </div>
  );
};

export default BookCardPreloader;
