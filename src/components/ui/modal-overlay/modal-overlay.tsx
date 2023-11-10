import styles from "./modal-overlay.module.css";

interface IModalOverlayProps {
  closeHandler: () => void;
}

function ModalOverlay({ closeHandler }: IModalOverlayProps): JSX.Element {
  return <div className={styles.overlay} onClick={closeHandler}></div>;
}

export { ModalOverlay };
