import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../ui/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useEffect, useReducer, useState } from "react";
import { Modal } from "../ui/modal/modal";
import { createOrderPOST } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { loadIngredients } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();

  const [isOrderModalShown, setIsOrderModalShown] = useState(false);
  const [ingredientInfo, setSelectedIngredient] = useState(null);
  const [orderNumber, setOrderNumber] = useState(0);

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  const { ingredients } = useSelector((store) => store.ingredients);

  const reducerInitialState = { bun: null, ingredients: [] };

  function ingredientsReducer(state, action) {
    switch (action.type) {
      case "add":
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
        const newArr = state.ingredients.filter(
          (ingredient) => ingredient._id != action.ingredient._id
        );
        return {
          bun: state.bun,
          ingredients: newArr,
        };
      default:
        console.error("unknown action type: ", action.type);
    }
  }

  const [selectedIngredients, selectedIngredientsDispatcher] = useReducer(
    ingredientsReducer,
    reducerInitialState,
    undefined
  );

  const createOrder = () => {
    let ids = [];

    if (selectedIngredients.ingredients.length > 0) {
      ids = selectedIngredients.ingredients.map((ingredient) => {
        return ingredient._id;
      });
    }

    if (selectedIngredients.bun !== null) {
      ids.push(selectedIngredients.bun._id);
      ids.push(selectedIngredients.bun._id);
    }

    if (ids.length > 0) {
      createOrderPOST({ ingredients: ids }).then((json) => {
        setOrderNumber(json.order.number);
      });
    }

    openModalHandler();
  };

  const openModalHandler = () => {
    setIsOrderModalShown(true);
  };

  const closeModalHandler = () => {
    setIsOrderModalShown(false);
    setSelectedIngredient(null);
  };

  function ingredientClickHandler(ingredientId) {
    const selected = ingredients.find(
      (ingredient) => ingredient._id === ingredientId
    );

    if (selected == null) {
      console.error("Ингредиент не обнаружен. {id}: ", ingredientId);
      return;
    }

    // Ингредиент, для модального окна.
    setSelectedIngredient(
      ingredients.find((ingredient) => ingredient._id === ingredientId)
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
        <div className={styles.halfContainer}>
          <BurgerIngredients handler={ingredientClickHandler} />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor />
          <CreateOrder clickHandler={createOrder} />
        </div>
      </div>

      {isOrderModalShown && (
        <Modal closeHandler={closeModalHandler}>
          <OrderDetails />
        </Modal>
      )}

      {ingredientInfo && (
        <Modal caption={"Детали инредиента"} closeHandler={closeModalHandler}>
          <IngredientDetails data={ingredientInfo} />
        </Modal>
      )}
    </div>
  );
}

export { App };
