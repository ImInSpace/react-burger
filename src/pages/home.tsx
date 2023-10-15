import styles from "./home.module.css";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { CreateOrder } from "../components/ui/create-order/create-order";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import OrderModal from "../components/ui/order-modal/order-modal";

export default function HomePage(): JSX.Element {
  const dispatch = useDispatch();

  const isCreateOrderModalShown = useSelector(
    // @ts-ignore
    (store) => store.order.isModalShown
  );

  // ToDo: После рефакторинга перенести обработчик в BurgerConstructor.
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
