import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  function closeModal() {
    props.closeHandler();
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const closeHandler = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-overlay"
      className={styles.overlay}
      onClickCapture={closeHandler}
      onKeyDown={handleKeyDown}
      tabIndex={1}
    >
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func,
  children: PropTypes.element,
};

export { ModalOverlay };
