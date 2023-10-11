import styles from "./home.module.css";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { CreateOrder } from "../components/ui/create-order/create-order";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import OrderModal from "../components/ui/order-modal";

export default function HomePage() {
  const dispatch = useDispatch();

  const isCreateOrderModalShown = useSelector(
    (store) => store.order.isModalShown
  );

  const handleDrop = (dragItem) => {
    dispatch(addIngredient(dragItem.id));
  };

  return (
    <div className={styles.app}>
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

      {isCreateOrderModalShown && <OrderModal />}
    </div>
  );
}
