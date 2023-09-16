import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../ui/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useEffect } from "react";
import { Modal } from "../ui/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { loadIngredients } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();

  const selectedIngredient = useSelector(
    (store) => store.ingredients.selectedIngredient
  );

  const isCreateOrderModalShown = useSelector(
    (store) => store.order.isModalShown
  );

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <div className={styles.halfContainer}>
          <BurgerIngredients />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor />
          <CreateOrder />
        </div>
      </div>

      {isCreateOrderModalShown && (
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
