import { useSelector } from "../../services/types";
import { TIngredient } from "../../services/types/data";
import { TOrder } from "../../utils/api-shape";
import { HistoryItem } from "./history-item/history-item";
import styles from "./orders-ribbon.module.css";

interface IOrderHistoryProps {
  children?: JSX.Element;
}

function OrdersRibbon(): JSX.Element {
  const orders = useSelector((store) => store.feed.message?.orders);

  // prettier-ignore
  const storeIngredients = useSelector((store) => store.ingredients.ingredients);

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
