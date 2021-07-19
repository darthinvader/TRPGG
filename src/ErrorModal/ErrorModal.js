import Modal from "../Modal/Modal";
import styles from "./ErrorModal.module.scss";
const ErrorModal = ({ onClose, onRetry, description, title }) => {
  return (
    <Modal>
      <button className={styles.Modal__closeButton} onClick={onClose}>
        Close
      </button>
      <img
        className={styles.Modal__img}
        src="https://i.imgur.com/oNNEJE4.png"
        title="source: imgur.com"
        alt="Guess I'll Die!"
      />
      <h1 className={styles.Modal__error}>Error</h1>
      <h2 className={styles.Modal__title}>{title}</h2>
      <p className={styles.Modal__description}>{description}</p>
      <button className={styles.Modal__retryButton} onClick={onRetry}>
        Retry
      </button>
    </Modal>
  );
};

export default ErrorModal;
