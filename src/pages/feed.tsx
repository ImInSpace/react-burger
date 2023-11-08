import { useEffect } from "react";
import styles from "./orders-history.module.css";
import { useDispatch, useSelector } from "../services/types";
import { Feed } from "../components/feed/feed";
import { OrdersDigest } from "../components/orders-digest/orders-digest";
import { WS_URL } from "../constants";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
} from "../services/constants";
import { Loader } from "../components/ui/loader/loader";

export default function FeedPage() {
  console.log("feed page");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect of FeedPage");
    dispatch({ type: WS_FEED_CONNECTION_START });

    return () => {
      dispatch({ type: WS_FEED_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  // Получаем данные по заказам текущего пользователя.
  const orders = useSelector((store) => store.wsFeedReducer.message?.orders);
  console.log("orders: ", orders);

  // Если данные о заказах не загрузились - показываем загрузчик.
  if (orders === undefined) {
    return <Loader inverse={true} size="large" />;
  }

  return (
    <div className={styles.container}>
      <p className={"text text_type_main-large " + styles.pageTitle}>
        Лента заказов
      </p>
      <div className={styles.twoColumnsWrapper}>
        <div className={styles.halfContainer}>
          <Feed orders={orders} />
        </div>
        <div className={styles.halfContainer}>
          <OrdersDigest />
        </div>
      </div>
    </div>
  );
}
