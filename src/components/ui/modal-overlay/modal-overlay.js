import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ closeHandler }) {
  return <div className={styles.overlay} onClick={closeHandler}></div>;
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func,
};

export { ModalOverlay };
