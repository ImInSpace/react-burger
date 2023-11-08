import { useEffect } from "react";
import styles from "./orders-history.module.css";
import { useDispatch } from "../services/types";
import {
  wsFeedConnectionClosedAction,
  wsFeedConnectionStartAction,
} from "../services/actions/wsFeed";
import { Feed } from "../components/feed/feed";
import { OrdersDigest } from "../components/orders-digest/orders-digest";
import { WS_URL } from "../constants";
import { WS_FEED_CONNECTION_CLOSED } from "../services/constants";

export default function FeedPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsFeedConnectionStartAction(WS_URL));
    // return () => {
    //   dispatch({ type: WS_FEED_CONNECTION_CLOSED });
    // };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <p className={"text text_type_main-large " + styles.pageTitle}>
        Лента заказов
      </p>
      <div className={styles.twoColumnsWrapper}>
        <div className={styles.halfContainer}>
          <Feed />
        </div>
        <div className={styles.halfContainer}>
          <OrdersDigest />
        </div>
      </div>
    </div>
  );
}
