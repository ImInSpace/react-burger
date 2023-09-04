import styles from "./ingredient-details.module.css";
import { IngredientImage } from "./ingredient-image/ingredient-image";
import { IngredientTitle } from "./components/ingredient-title/ingredient-title";
import { Macronutrients } from "./components/macronutrients/macronutrients";
import { ingredientDataShape } from "../../utils/prop-types";

function IngredientDetails({ data }) {
  return (
    <div className={styles.container}>
      <IngredientImage img={data.image} />
      <IngredientTitle text={data.name} />
      <Macronutrients {...data} />
    </div>
  );
}

IngredientDetails.propTypes = {
  data: ingredientDataShape,
};

export { IngredientDetails };
