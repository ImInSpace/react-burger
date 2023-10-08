import styles from "./ingredient-details.module.css";
import { IngredientImage } from "./ingredient-image/ingredient-image";
import { IngredientTitle } from "./ingredient-title/ingredient-title";
import { Macronutrients } from "./macronutrients/macronutrients";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function IngredientDetails() {
  const { id } = useParams("id");
  const { ingredients } = useSelector((store) => store.ingredients);

  const theOne = ingredients.find((ingredient) => ingredient._id === id);

  return (
    <>
      {theOne ? (
        <div className={styles.container}>
          <IngredientImage img={theOne.image} />
          <IngredientTitle text={theOne.name} />
          <Macronutrients {...theOne} />
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
