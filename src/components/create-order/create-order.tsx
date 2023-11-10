import styles from "./create-order.module.css";
import iconDone from "../../images/done.png";
import { OrderNumber } from "./order-number/order-number";
import { OrderStatus } from "./order-status/order-status";
import { Loader } from "../ui/loader/loader";
import { useSelector } from "../../services/types";

function CreateOrder() {
  const { orderRequest } = useSelector((store) => store.order);

  return (
    <div className={styles.container}>
      <OrderNumber />
      {orderRequest ? (
        <Loader size="large" inverse={true} />
      ) : (
        <img className="mt-15" src={iconDone} alt="order icon" />
      )}
      <OrderStatus />
    </div>
  );
}

export { CreateOrder };
