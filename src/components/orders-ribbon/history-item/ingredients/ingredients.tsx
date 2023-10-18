import { IngredientIcon } from "./ingredient-icon/ingredient-icon";
import styles from "./ingredients.module.css";

interface IIngredientsProps {
  ingredients: Array<JSX.Element>;
}

function Ingredients(): JSX.Element {
  return (
    <div className={styles.container}>
      <IngredientIcon />
      <IngredientIcon />
      <IngredientIcon />
      <IngredientIcon />
      <IngredientIcon />
      <IngredientIcon />
    </div>
  );
}

export { Ingredients };
