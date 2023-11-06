import styles from "./home.module.css";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { CreateOrderBtn } from "../components/ui/create-order-btn/create-order-btn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import OrderModal from "../components/ui/order-modal/order-modal";
import { useDispatch, useSelector } from "../services/types";
import { useEffect } from "react";
import { wsConnectionStartAction } from "../services/actions/web-socket";

export default function HomePage(): JSX.Element {
  const dispatch = useDispatch();

  const isCreateOrderModalShown = useSelector(
    (store) => store.order.isModalShown
  );

  useEffect(() => {
    dispatch(wsConnectionStartAction());
  });

  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.container}>
          <div className={styles.halfContainer}>
            <BurgerIngredients />
          </div>
          <div className={styles.halfContainer}>
            <BurgerConstructor />
            <CreateOrderBtn />
          </div>
        </div>
      </DndProvider>

      {isCreateOrderModalShown && <OrderModal />}
    </div>
  );
}
