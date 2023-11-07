import { useEffect } from "react";
import { useSelector, useDispatch } from "../../services/types";
import { TIngredient } from "../../services/types/data";
import { HistoryItem } from "./history-item/history-item";
import styles from "./orders-ribbon.module.css";
import { wsConnectionStartAction } from "../../services/actions/web-socket";
import { Loader } from "../ui/loader/loader";

function OrdersRibbon(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartAction());
  });

  const orders = useSelector((store) => store.feed.message?.orders);
  const storeIngredients = useSelector(
    (store) => store.ingredients.ingredients
  );

  if (orders === undefined) {
    return <Loader size="large" inverse={true} />;
  }

  return (
    <div className={styles.container + "  custom-scroll pr-2"}>
      {orders?.map((order) => {
        let ingredientsInOrder: Array<TIngredient> = [];

        order.ingredients.forEach((id) => {
          ingredientsInOrder.push(
            storeIngredients.find((ingredient) => ingredient._id === id)!
          );
        });

        return (
          <HistoryItem
            burgerName={order.name}
            orderNumber={order.number}
            ingredients={ingredientsInOrder!}
            key={order._id}
            createdAt={order.createdAt}
          />
        );
      })}
    </div>
  );
}

export { OrdersRibbon };
