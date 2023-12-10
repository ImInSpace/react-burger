import styles from "./modal-header.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface IModalHeaderProps {
  caption: string;
  closeHandler: () => void;
}

function ModalHeader({
  caption,
  closeHandler,
}: IModalHeaderProps): JSX.Element {
  return (
    <div className={styles.caption + " mt-10 ml-10 mr-10"}>
      <p className="text text_type_main-large">{caption}</p>
      <div
        className={styles.closeBtn}
        onClick={closeHandler}
        data-cy="close-btn"
      >
        <CloseIcon type="primary" />
      </div>
    </div>
  );
}

export { ModalHeader };
