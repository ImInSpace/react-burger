import styles from "./modal-overlay.module.css";

interface IModalOverlayProps {
  closeHandler: () => void;
}

function ModalOverlay({ closeHandler }: IModalOverlayProps): JSX.Element {
  return (
    <div
      className={styles.overlay}
      onClick={closeHandler}
      data-cy="modal"
    ></div>
  );
}

export { ModalOverlay };
