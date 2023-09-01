import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  return <div className={styles.overlay}>{props.children}</div>;
}

ModalOverlay.propTypes = {
  children: PropTypes.element,
};

export { ModalOverlay };
