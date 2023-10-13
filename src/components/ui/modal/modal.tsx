import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";
import { useEffect, useRef, ReactNode } from "react";
import { ModalHeader } from "./modal-header/modal-header";

interface IModalProps {
  caption?: string;
  closeHandler: () => void;
  children?: ReactNode;
}

function Modal({ caption, closeHandler, children }: IModalProps): JSX.Element {
  const portal = document.getElementById("react-modals");
  const modalDivRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  const keyDownHandler = (args: KeyboardEvent) => {
    if (args.key === "Escape") {
      close();
    }
  };

  const close = () => {
    closeHandler();
  };

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeHandler={close} />
      <div className={styles.modal} onKeyDown={close} ref={modalDivRef}>
        <ModalHeader caption={caption} closeHandler={close} />
        {children}
      </div>
    </>,
    portal!
  );
}

Modal.propTypes = {
  caption: PropTypes.string, // Не у всех модальных окон есть заголовок.
  children: PropTypes.element.isRequired,
  closeHandler: PropTypes.any.isRequired,
};

export { Modal };
