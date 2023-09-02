import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  const handleKeyDown = (event) => {
    console.log(event.key);
  };

  const closeHandler = (e) => {
    console.log("current target id: ", e.target.id);
    if (e.target.id === "modal-overlay") {
      props.closeHandler();
    }
  };

  return (
    <div
      id="modal-overlay"
      className={styles.overlay}
      onClickCapture={closeHandler}
      tabIndex={0}
      onKeyDown={handleKeyDown}
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
