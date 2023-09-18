import styles from "./macronutrient.module.css";
import PropTypes from "prop-types";

function Macronutrient(props) {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-default text_color_inactive">
        {props.title}
      </p>
      <p className="text text_type_digits-default text_color_inactive">
        {props.value}
      </p>
    </div>
  );
}

Macronutrient.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export { Macronutrient };
