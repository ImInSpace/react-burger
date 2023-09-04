import styles from "./constructor-row.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function ConstructorRow({ children, showDragIcon }) {
  return (
    <div className={styles.row + " mt-4"}>
      <div className="icon">{showDragIcon && <DragIcon />}</div>
      {children}
    </div>
  );
}

ConstructorRow.propTypes = {
  children: PropTypes.element,
  showDragIcon: PropTypes.bool,
};

export { ConstructorRow };
