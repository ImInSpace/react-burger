import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

function Modal(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.caption + " mt-10 ml-10 mr-10"}>
        <p className="text text_type_main-large">{props.caption}</p>
        <div className={styles.shadow}>
          <CloseIcon />
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

Modal.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
};

export { Modal };
