import styles from "./BookPreloader.module.scss";

const BookPreloader = () => {
  return (
    <>
      <div className={styles.Img__aspectRatioWrapper}>
        <div className={styles.Img}></div>
      </div>
      <div className={styles.Title}></div>
      <div className={styles.Description}></div>
    </>
  );
};

export default BookPreloader;
