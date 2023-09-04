import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./price.module.css";

function Price({ price, textSize = "default" }) {
  return (
    <div className={styles.costRow}>
      <span className={"text text_type_digits-" + textSize}>{price}</span>
      <CurrencyIcon />
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.number,
  textSize: PropTypes.oneOf(["default", "medium", "large"]),
};

export { Price };
