import styles from "./ingredient-details.module.css";
import { Macronutrient } from "./macronutrient/macronutrient";
import meat from "../../images/meat.png";
import { Modal } from "../modal/modal";
import PropTypes from "prop-types";

function IngredientDetails(props) {
  return (
    <Modal caption="Детали ингредиента" {...props}>
      <div className={styles.container}>
        <IngredientImage />
        <IngredientTitle text="Биокотлета из марсианской Магнолии" />
        <Macronutrients />
      </div>
    </Modal>
  );
}

IngredientDetails.propTypes = {
  closeHandler: PropTypes.func,
};

function IngredientImage(props) {
  return (
    <div className={styles.imageContainer}>
      <img src={meat} alt="Изображение ингредиента"></img>
    </div>
  );
}

function IngredientTitle({ text }) {
  return <p className="text text_type_main-medium mt-4">{text}</p>;
}

function Macronutrients() {
  return (
    <div className={styles.macronutrients + " mt-8 mb-10"}>
      <Macronutrient title="Калории,ккал" value={244.4} />
      <Macronutrient title="Белки, г" value={12.2} />
      <Macronutrient title="Жиры, г" value={17.2} />
      <Macronutrient title="Углеводы, г" value={10.2} />
    </div>
  );
}

export { IngredientDetails };
