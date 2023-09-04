import styles from "./order-details.module.css";
import iconDone from "../../images/done.png";
import { OrderNumber } from "./order-number/order-number";
import { OrderStatus } from "./components/order-status/order-status";

function OrderDetails() {
  return (
    <div className={styles.container}>
      <OrderNumber />
      <img className="mt-15" src={iconDone} alt="order icon" />
      <OrderStatus />
    </div>
  );
}

export { OrderDetails };
