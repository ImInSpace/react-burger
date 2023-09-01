import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "./modal-overlay/modal-overlay";

function Modal(props) {
  return (
    <ModalOverlay>
      <div className={styles.modal}>
        <ModalHeader caption={props.caption} />
        {props.children}
      </div>
    </ModalOverlay>
  );
}

function ModalHeader({ caption }) {
  return (
    <div className={styles.caption + " mt-10 ml-10 mr-10"}>
      <p className="text text_type_main-large">{caption}</p>
      <div className={styles.closeBtn}>
        <CloseIcon />
      </div>
    </div>
  );
}

Modal.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
};

export { Modal };
