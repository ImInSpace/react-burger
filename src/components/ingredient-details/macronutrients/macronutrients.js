import { Macronutrient } from "../macronutrient/macronutrient";
import styles from "./macronutrients.module.css";
import PropTypes from "prop-types";

function Macronutrients({ calories, proteins, fat, carbohydrates }) {
  return (
    <div className={styles.macronutrients + " mt-8 mb-10"}>
      <Macronutrient title="Калории,ккал" value={calories} />
      <Macronutrient title="Белки, г" value={proteins} />
      <Macronutrient title="Жиры, г" value={fat} />
      <Macronutrient title="Углеводы, г" value={carbohydrates} />
    </div>
  );
}

Macronutrients.propTypes = {
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};

export { Macronutrients };
