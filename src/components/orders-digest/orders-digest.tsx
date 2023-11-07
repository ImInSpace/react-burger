import styles from "./orders-digest.module.css";
import { InProgress } from "./in-progress/in-progress";
import { Total } from "./total/total";
import { useSelector } from "../../services/types";
import { EOrderStatus, TOrder, TWsResponseBody } from "../../utils/api-shape";
import { Loader } from "../ui/loader/loader";

function OrdersDigest() {
  const feed = useSelector((store) => store.feed.message);

  if (feed === null) {
    return <Loader size="large" inverse={true} />;
  }

  const orderNumbersCompleted = getOrderNumbers(
    feed!.orders,
    EOrderStatus.done
  );
  const orderNumbersInProgress = getOrderNumbers(
    feed!.orders,
    EOrderStatus.created
  );

  return (
    <div className={styles.container}>
      <div className={styles.numbers}>
        <InProgress
          headerText="Готовы: "
          orderNumbers={orderNumbersCompleted}
        />
        <InProgress
          headerText="В работе: "
          orderNumbers={orderNumbersInProgress}
        />
      </div>
      <div className={styles.total_all_time}>
        <Total caption="Выполнено за все время:" number={feed.total} />
      </div>
      <div className={styles.total_today}>
        <Total caption="Выполнено за сегодня:" number={feed.totalToday} />
      </div>
    </div>
  );
}

function getOrderNumbers(orders: ReadonlyArray<TOrder>, status: EOrderStatus) {
  return orders.filter((order) => order.status === status).map((x) => x.number);
}

export { OrdersDigest };
