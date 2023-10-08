import styles from "./ingredient-details.module.css";
import { IngredientImage } from "./ingredient-image/ingredient-image";
import { IngredientTitle } from "./ingredient-title/ingredient-title";
import { Macronutrients } from "./macronutrients/macronutrients";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIngredients } from "../../utils/api";

function IngredientDetails() {
  const { id } = useParams("id");

  // Если это модалка - данные об ингредиентах находятся в сторе.
  const { ingredients } = useSelector((store) => store.ingredients);
  let selectedIngredient = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  // Если страница с ингредиентом открывается вне сайта - делаем запрос к серверу,
  // получаем ингредиенту и фильтруем по идентификатору.
  if (!selectedIngredient) {
    getIngredients().then((json) => {
      console.log(json);
      if (json.success) {
        console.log("У нас тут саксес");
        json.data.map((el) => console.log(el._id));
        console.log("id: ", id);

        selectedIngredient = json.data.find(
          (ingredient) => ingredient._id === id
        );
      }
    });
  }

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
