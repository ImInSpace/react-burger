import styles from "./ingredient-details.module.css";
import { IngredientImage } from "./ingredient-image/ingredient-image";
import { IngredientTitle } from "./ingredient-title/ingredient-title";
import { Macronutrients } from "./macronutrients/macronutrients";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const selectedIngredient = useSelector(
    (store) => store.ingredients.selectedIngredient
  );

  return (
    <div className={styles.container}>
      <IngredientImage img={selectedIngredient.image} />
      <IngredientTitle text={selectedIngredient.name} />
      <Macronutrients {...selectedIngredient} />
    </div>
  );
}

export { IngredientDetails };
