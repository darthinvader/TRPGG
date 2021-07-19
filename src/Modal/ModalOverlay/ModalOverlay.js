import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ children }) => {
  return <div className={styles.ModalOverlay}>{children}</div>;
};

export default ModalOverlay;
