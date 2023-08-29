import { formatPrice } from "../../../utils/formatter";
import styles from "./macronutrient.module.css";
import PropTypes from "prop-types";

function Macronutrient(props) {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-default text_color_inactive">
        {props.title}
      </p>
      <p className="text text_type_digits-default text_color_inactive">
        {formatPrice(props.value)}
      </p>
    </div>
  );
}

Macronutrient.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};

export { Macronutrient };
