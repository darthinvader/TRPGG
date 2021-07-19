import ModalOverlay from "./ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <ModalOverlay>
      <div className={styles.Modal}>{children}</div>
    </ModalOverlay>
  );
};

export default Modal;
