import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-details.module.css";
import { Macronutrient } from "./macronutrient/macronutrient";
import meat from "../../images/meat.png";

function IngredientDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.caption + " mt-10 ml-10"}>
        <p className="text text_type_main-large">Детали ингредиента</p>
        <div className={styles.shadow}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={meat} alt="Изображение ингредиента"></img>
        </div>
        <p className="text text_type_main-medium mt-4">
          Биокотлета из марсианской Магнолии
        </p>
        <div className={styles.macronutrients + " mt-8"}>
          <Macronutrient title="Калории,ккал" value="244,4" />
          <Macronutrient title="Белки, г" value="12,2" />
          <Macronutrient title="Жиры, г" value="17,2" />
          <Macronutrient title="Углеводы, г" value="10,2" />
        </div>
      </div>
    </div>
  );
}

export { IngredientDetails };
