import styles from "./BookCardPreloader.module.scss";

const BookCardPreloader = () => {
  return (
    <div className={styles.BookCard + " " + styles.BookCardPreloader}>
      <div className={styles["BookCardPreloader__img--wrapper"]}>
        <div className={styles["BookCardPreloader__img--aspect-ratio-wrapper"]}>
          <div className={styles.BookCardPreloader__img}></div>
        </div>
      </div>
      <div className={styles.BookCardPreloader__title}></div>
      <div className={styles.BookCardPreloader__description}></div>
    </div>
  );
};

export default BookCardPreloader;
