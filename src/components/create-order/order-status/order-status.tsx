import styles from "./order-status.module.css";
import { useSelector } from "react-redux";

function OrderStatus(): JSX.Element {
  // @ts-ignore
  const { number } = useSelector((store) => store.order);

  return (
    <>
      <p className="text text_type_main-default mt-15">
        {number === 0
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
