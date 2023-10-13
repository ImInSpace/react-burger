import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

interface IModalOverlayProps {
  closeHandler: () => void;
}

function ModalOverlay({ closeHandler }: IModalOverlayProps): JSX.Element {
  return <div className={styles.overlay} onClick={closeHandler}></div>;
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func,
};

export { ModalOverlay };
