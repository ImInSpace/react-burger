import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import ReactDOM from "react-dom";

function Modal(props) {
  const portal = document.getElementById("react-modals");
  console.log(props);

  const handleKeyDown = (event) => {
    console.log(event.key);
  };
  return ReactDOM.createPortal(
    <ModalOverlay closeHandler={props.closeHandler}>
      <div className={styles.modal} tabIndex={0} onKeyDown={handleKeyDown}>
        <ModalHeader
          caption={props.caption}
          closeHandler={props.closeHandler}
        />
        {props.children}
      </div>
    </ModalOverlay>,
    portal
  );
}

Modal.propTypes = {
  caption: PropTypes.string,
  closeHandler: PropTypes.func,
  children: PropTypes.element,
};

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

export { Modal };
