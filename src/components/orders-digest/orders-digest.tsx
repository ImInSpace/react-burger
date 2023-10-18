import styles from "./orders-digest.module.css";
import { InProgress } from "./in-progress/in-progress";
import { Total } from "./total/total";

function OrdersDigest() {
  let ordersCompleted: Array<string>;
  ordersCompleted = ["034525", "034526", "034531", "034532", "034533"];

  let ordersInProgress: Array<string>;
  ordersInProgress = ["034525", "034526", "034531"];

  return (
    <div className={styles.container}>
      <div className={styles.numbers}>
        <InProgress headerText="Готовы: " orderNumbers={ordersCompleted} />
        <InProgress headerText="В работе: " orderNumbers={ordersInProgress} />
      </div>
      <div className={styles.total_all_time}>
        <Total caption="Выполнено за все время:" number={28752} />
      </div>
      <div className={styles.total_today}>
        <Total caption="Выполнено за сегодня:" number={138} />
      </div>
    </div>
  );
}

export { OrdersDigest };
