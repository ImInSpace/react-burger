import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../ui/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useEffect, useState } from "react";
import { Modal } from "../ui/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { loadIngredients } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();
  const selectedIngredient = useSelector(
    (store) => store.ingredients.selectedIngredient
  );

  const [isOrderModalShown, setIsOrderModalShown] = useState(false);

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  const createOrder = () => {
    // let ids = [];
    // if (selectedIngredients.ingredients.length > 0) {
    //   ids = selectedIngredients.ingredients.map((ingredient) => {
    //     return ingredient._id;
    //   });
    // }
    // if (selectedIngredients.bun !== null) {
    //   ids.push(selectedIngredients.bun._id);
    //   ids.push(selectedIngredients.bun._id);
    // }
    // if (ids.length > 0) {
    //   createOrderPOST({ ingredients: ids }).then((json) => {
    //     setOrderNumber(json.order.number);
    //   });
    // }
    // openModalHandler();
  };

  // const openModalHandler = () => {
  //   setIsOrderModalShown(true);
  // };

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <div className={styles.halfContainer}>
          <BurgerIngredients />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor />
          <CreateOrder clickHandler={createOrder} />
        </div>
      </div>

      {isOrderModalShown && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}

      {selectedIngredient && (
        <Modal caption={"Детали инредиента"}>
          <IngredientDetails data={selectedIngredient} />
        </Modal>
      )}
    </div>
  );
}

export { App };
