import Modal from "../Modal";
import styles from "./ErrorModal.module.scss";
const ErrorModal = ({ onClose, onRetry, description, title }) => {
  return (
    <Modal>
      <button className={styles.CloseButton} onClick={onClose}>
        Close
      </button>
      <img
        className={styles.Img}
        src="https://i.imgur.com/oNNEJE4.png"
        title="source: imgur.com"
        alt="Guess I'll Die!"
      />
      <h1 className={styles.ErrorModal}>Error</h1>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.Description}>{description}</p>
      <button className={styles.RetryButton} onClick={onRetry}>
        Retry
      </button>
    </Modal>
  );
};

export default ErrorModal;
