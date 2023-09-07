import styles from "./burger-constructor.module.css";
import { useContext } from "react";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";

function BurgerConstructor() {
  const { selectedIngredients, selectedIngredientsDispatcher } = useContext(
    BurgerConstructorContext
  );

  console.log("selected ingredients: :", selectedIngredients.bun);

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
          />
        );
      })}
      <Bun bunInfo={selectedIngredients.bun} bunPosition={"bottom"} />
    </div>
  );
}

export { BurgerConstructor };
