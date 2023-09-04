import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

function Modal(props) {
  const portal = document.getElementById("react-modals");
  const modalDivRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  const keyDownHandler = (args) => {
    if (args.key === "Escape") {
      close();
    }
  };

  const close = () => {
    props.closeHandler();
  };

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeHandler={close} />
      <div className={styles.modal} onKeyDown={close} ref={modalDivRef}>
        <ModalHeader
          caption={props.caption}
          closeHandler={props.closeHandler}
        />
        {props.content}
      </div>
    </>,
    portal
  );
}

function ModalHeader({ caption, closeHandler }) {
  return (
    <div className={styles.caption + " mt-10 ml-10 mr-10"}>
      <p className="text text_type_main-large">{caption}</p>
      <div className={styles.closeBtn} onClick={closeHandler}>
        <CloseIcon />
      </div>
    </div>
  );
}

Modal.propTypes = {
  caption: PropTypes.string,
  closeHandler: PropTypes.func,
  content: PropTypes.element.isRequired,
};

ModalHeader.propTypes = {
  caption: PropTypes.string,
  closeHandler: PropTypes.func,
};

export { Modal };
