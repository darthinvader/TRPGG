import styles from "./FloatingInput.module.scss";

const FloatingInput = ({ x, y, onSubmit }) => {
  return (
    <div className={styles.Container}>
      <input placeholder="Add Image Url" className={styles.Input}></input>
      <button className={styles.Button} onClick={onSubmit}>
        Add Image
      </button>
    </div>
  );
};

export default FloatingInput;
