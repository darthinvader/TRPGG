import styles from "./FloatingInput.module.scss";

const floatingInput = ({ x, y, onSubmit }) => {
  return (
    <div className={styles.Container}>
      <input
        placeholder="Add Image Url"
        style={{ position: "absolute", left: x, top: y }}
        className={styles.Input}
      ></input>
      <button className={styles.Button} onClick={onSubmit}></button>
    </div>
  );
};
