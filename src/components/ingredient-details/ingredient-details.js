import styles from "./ingredient-details.module.css";
import { IngredientImage } from "./ingredient-image/ingredient-image";
import { IngredientTitle } from "./ingredient-title/ingredient-title";
import { Macronutrients } from "./macronutrients/macronutrients";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadIngredients } from "../../services/actions/ingredients";
import { useEffect } from "react";

function IngredientDetails() {
  const dispatch = useDispatch();
  const { id } = useParams("id");

  // Если это модалка - данные об ингредиентах находятся в сторе.
  const { ingredients } = useSelector((store) => store.ingredients);
  let selectedIngredient = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

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
