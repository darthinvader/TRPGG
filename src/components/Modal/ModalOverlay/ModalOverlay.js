import styles from "./ModalOverlay.module.scss";

const ModalOverlay = ({ children }) => {
  return <div className={styles.ModalOverlay}>{children}</div>;
};

export default ModalOverlay;
