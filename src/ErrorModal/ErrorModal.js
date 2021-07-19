import Modal from "../Modal/Modal";
import styles from "./ErrorModal.module.scss";
const ErrorModal = ({ onClose, onRetry, Message, Title }) => {
  return (
    <Modal>
      <button className={styles.Modal__closeButton}>Close</button>
      <img
        className={styles.Modal__img}
        src="https://i.imgur.com/oNNEJE4.png"
        title="source: imgur.com"
        alt="Guess I'll Die!"
      />
      <h1 className={styles.Modal__error}>Error</h1>
      <h2 className={styles.Modal__title}>Books Didn't Load</h2>
      <p className={styles.Modal__description}>
        This might have happened because you don't have internet or the server
        is down. Contact the system administrator or retry.
      </p>
      <button className={styles.Modal__retryButton}>Retry</button>
    </Modal>
  );
};

export default ErrorModal;
