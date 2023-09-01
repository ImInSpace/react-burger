import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "./modal-overlay/modal-overlay";

function Modal(props) {
  return (
    <ModalOverlay>
      <div className={styles.modal}>
        <div className={styles.caption + " mt-10 ml-10 mr-10"}>
          <p className="text text_type_main-large">{props.caption}</p>
          <CloseBtn />
        </div>
        {props.children}
      </div>
    </ModalOverlay>
  );
}

function CloseBtn() {
  return (
    <div className={styles.closeBtn}>
      <CloseIcon />
    </div>
  );
}

Modal.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
};

export { Modal };
