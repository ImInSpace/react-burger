import { useSelector } from "../../../services/types";
import styles from "./order-number.module.css";

function OrderNumber() {
  const { orderNumber } = useSelector((store) => store.order);

  return (
    <>
      <p className={styles.orderNumber + " text text_type_digits-large mt-20"}>
        {orderNumber === 0 ? "" : orderNumber}
      </p>

      <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
    </>
  );
}

export { OrderNumber };
