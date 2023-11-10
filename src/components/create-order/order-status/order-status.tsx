import { useSelector } from "../../../services/types";
import styles from "./order-status.module.css";

function OrderStatus(): JSX.Element {
  const { orderNumber } = useSelector((store) => store.order);

  return (
    <>
      <p className="text text_type_main-default mt-15">
        { orderNumber === 0
          ? "Отправляем заказ в бургерную..."
          : "Ваш заказ начали готовить"}
      </p>
      <p
        className={
          styles.orderStatus + " text text_type_main-default mt-2 mb-20"
        }
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export { OrderStatus };
