import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function ModalOverlay(props) {
  const modalRootDivRef = useRef(null);

  useEffect(() => {
    modalRootDivRef.current.focus();
  });

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
      ref={modalRootDivRef}
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
