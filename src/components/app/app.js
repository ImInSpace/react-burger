import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../ui/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useEffect, useReducer, useState } from "react";
import { Modal } from "../ui/modal/modal";
import { getIngredients } from "../../utils/api";
import { IngredientsContext } from "../../context/ingredients-context";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    getIngredients().then((json) => setIngredientsData(json.data));
  }, []);

  const reducerInitialState = { bun: null, ingredients: [] };

  function ingredientsReducer(state, action) {
    console.log("ingredients reducer. state:", state);
    console.log("ingredients reducer. action:", action);

    switch (action.type) {
      case "add":
        console.log("add ingredient to constructor:", action.ingredient);
        console.log("add bun to constructor:", action.bun);
        if (action.ingredient.type === "bun") {
          return {
            bun: action.ingredient,
            ingredients: [...state.ingredients],
          };
        } else {
          return {
            bun: state.bun,
            ingredients: [...state.ingredients, action.ingredient],
          };
        }
      case "remove":
        console.log("remove ingredient from constructor");
        return null;
      default:
        console.error("unknown action type: ", action.type);
    }
  }

  const [selectedIngredients, selectedIngredientsDispatcher] = useReducer(
    ingredientsReducer,
    reducerInitialState,
    undefined
  );

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
    setSelectedIngredient(null);
  };

  function ingredientClickHandler(ingredientId) {
    const selected = ingredientsData.find(
      (ingredient) => ingredient._id === ingredientId
    );

    if (selected == null) {
      console.error("Ингредиент не обнаружен. {id}: ", ingredientId);
      return;
    }

    // Ингредиент, для модального окна.
    setSelectedIngredient(
      ingredientsData.find((ingredient) => ingredient._id === ingredientId)
    );

    // Список ингредиентов для конструктора.
    selectedIngredientsDispatcher({
      type: "add",
      ingredient: selected,
    });
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <IngredientsContext.Provider value={{ ingredients: ingredientsData }}>
          {/* prettier-ignore */}
          <BurgerConstructorContext.Provider value={selectedIngredients}>
            <div className={styles.halfContainer}>
              <BurgerIngredients handler={ingredientClickHandler} />
            </div>
            <div className={styles.halfContainer}>
              <BurgerConstructor />
              <CreateOrder clickHandler={openModalHandler} />
            </div>
          </BurgerConstructorContext.Provider>
        </IngredientsContext.Provider>
      </div>

      {isModalShown && (
        <Modal closeHandler={closeModalHandler}>
          <OrderDetails />
        </Modal>
      )}

      {selectedIngredient && (
        <Modal caption={"Детали инредиента"} closeHandler={closeModalHandler}>
          <IngredientDetails data={selectedIngredient} />
        </Modal>
      )}
    </div>
  );
}

export { App };
