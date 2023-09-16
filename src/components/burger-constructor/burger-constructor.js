import styles from "./burger-constructor.module.css";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";

function BurgerConstructor() {
  const selectedIngredients = useSelector(
    (store) => store.ingredients.constructorIngredients
  );

  console.log("selected ingredients: ", selectedIngredients);

  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      <Bun bunInfo={selectedIngredients.bun} bunPosition={"top"} />
      {selectedIngredients.ingredients?.map((ingredientInfo) => {
        return (
          <Ingredient
            ingredientInfo={ingredientInfo}
            key={"ingredient_" + uuid()} // могут быть добавлены два одинаковых ингредиента.
          />
        );
      })}
      <Bun bunInfo={selectedIngredients.bun} bunPosition={"bottom"} />
    </div>
  );
}

export { BurgerConstructor };
