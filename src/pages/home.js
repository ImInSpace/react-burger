import styles from "./home.module.css";
import { AppHeader } from "../components/app-header/app-header";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { CreateOrder } from "../components/ui/create-order/create-order";
import { IngredientDetails } from "../components/ingredient-details/ingredient-details";
import { OrderDetails } from "../components/order-details/order-details";
import { useEffect } from "react";
import { Modal } from "../components/ui/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  loadIngredients,
} from "../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  const selectedIngredient = useSelector(
    (store) => store.ingredients.selectedIngredient
  );

  const savedUser = useSelector((store) => store.auth);

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
