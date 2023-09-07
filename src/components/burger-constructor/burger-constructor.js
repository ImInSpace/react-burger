import styles from "./burger-constructor.module.css";
import { useContext } from "react";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";
import { v4 as uuid } from "uuid";

function BurgerConstructor() {
  const { selectedIngredients, selectedIngredientsDispatcher } = useContext(
    BurgerConstructorContext
  );

  const deleteIngredient = (ingredient) => {
    selectedIngredientsDispatcher({ type: "remove", ingredient: ingredient });
  };

  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      <Bun bunInfo={selectedIngredients.bun} bunPosition={"top"} />
      {selectedIngredients.ingredients?.map((ingredientInfo) => {
        return (
          <Ingredient
            ingredientInfo={ingredientInfo}
            onDeleteHandler={deleteIngredient}
            key={"ingredient_" + uuid()} // могут быть добавлены два одинаковых ингредиента.
          />
        );
      })}
      <Bun bunInfo={selectedIngredients.bun} bunPosition={"bottom"} />
    </div>
  );
}

export { BurgerConstructor };
