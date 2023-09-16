import styles from "./modal-header.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

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

ModalHeader.propTypes = {
  caption: PropTypes.string,
  closeHandler: PropTypes.func.isRequired,
};

export { ModalHeader };
