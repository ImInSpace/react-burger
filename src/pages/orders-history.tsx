import { OrderDetails } from "../components/order-details/order-details";
import { OrdersDigest } from "../components/orders-digest/orders-digest";
import { OrdersRibbon } from "../components/orders-ribbon/orders-ribbon";
import styles from "./orders-history.module.css";

export default function OrdersHistoryPage() {
  return (
    <div>
      <OrderDetails />
    </div>
    // <div className={styles.container}>
    //   <p className={"text text_type_main-large " + styles.pageTitle}>
    //     Лента заказов
    //   </p>
    //   <div className={styles.twoColumnsWrapper}>
    //     <div className={styles.halfContainer}>
    //       <OrdersRibbon />
    //     </div>
    //     <div className={styles.halfContainer}>
    //       <OrdersDigest />
    //     </div>
    //   </div>
    // </div>
  );
}
