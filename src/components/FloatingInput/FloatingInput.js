import styles from "./FloatingInput.module.scss";
import { MdClose } from "react-icons/md";

const FloatingInput = ({ x, y, onSubmit, onClose }) => {
  return (
    <div className={styles.Container}>
      <input placeholder="Add Image Url" className={styles.Input}></input>
      <button className={styles.Button} onClick={onSubmit}>
        Add Image
      </button>
      <MdClose />
    </div>
  );
};

export default FloatingInput;
