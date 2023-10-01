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
import {
  addIngredient,
  loadIngredients,
} from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  const selectedIngredient = useSelector(
    (store) => store.ingredients.selectedIngredient
  );

  const isCreateOrderModalShown = useSelector(
    (store) => store.order.isModalShown
  );

  const handleDrop = (dragItem) => {
    dispatch(addIngredient(dragItem.id));
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <div className={styles.container}>
          <div className={styles.halfContainer}>
            <BurgerIngredients />
          </div>
          <div className={styles.halfContainer}>
            <BurgerConstructor onDropHandler={handleDrop} />
            <CreateOrder />
          </div>
        </div>
      </DndProvider>

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
