import Modal from "../Modal/Modal";

const ErrorModal = ({ onClose, onRetry, Message, Title }) => {
  return (
    <Modal>
      <button class="Modal__ClosingButton">Close</button>
      <img
        className="Modal__img"
        src="https://i.imgur.com/oNNEJE4.png"
        title="source: imgur.com"
        alt="Guess I'll Die!"
      />
      <h1 class="Title">Error</h1>
      <h2 class="Title">Books Didn't Load</h2>
      <p>
        This might have happened because you don't have internet or the server
        is down. Contact the system administrator or retry.
      </p>
      <button class="Modal__RetryButton">Retry</button>
    </Modal>
  );
};

export default ErrorModal;
