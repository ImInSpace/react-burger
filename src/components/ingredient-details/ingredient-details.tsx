import { useSelector } from "../../services/types";
import { IIngredientDataShape } from "../../utils/api-shape";
import styles from "./ingredient-details.module.css";
import { IngredientImage } from "./ingredient-image/ingredient-image";
import { IngredientTitle } from "./ingredient-title/ingredient-title";
import { Macronutrients } from "./macronutrients/macronutrients";
import { useParams } from "react-router-dom";

function IngredientDetails() {
  const { id } = useParams();

  const { ingredients } = useSelector((store) => store.ingredients);
  let selectedIngredient = ingredients.find(
    (ingredient: IIngredientDataShape) => ingredient._id === id
  );

  return (
    <>
      {selectedIngredient ? (
        <div className={styles.container}>
          <IngredientImage img={selectedIngredient.image} />
          <IngredientTitle text={selectedIngredient.name} />
          <Macronutrients {...selectedIngredient} />
        </div>
      ) : (
        <p className="text text_type_main-medium">
          А такого ингредиента не существует...
        </p>
      )}
    </>
  );
}

export { IngredientDetails };
