import { useEffect } from "react";
import { useSelector, useDispatch } from "../../services/types";
import { TIngredient } from "../../services/types/data";
import styles from "./feed.module.css";
import { wsFeedConnectionStartAction } from "../../services/actions/wsFeed";
import { Loader } from "../ui/loader/loader";
import { FeedCard } from "./feed-card/feed-card";
import { WS_URL } from "../../constants";

function Feed(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsFeedConnectionStartAction(WS_URL));
  });

  const orders = useSelector((store) => store.feed.message?.orders);
  const storeIngredients = useSelector(
    (store) => store.ingredients.ingredients
  );

  // Заказы не загрузились? Показываем загрузчик.
  if (orders === undefined) {
    return <Loader size="large" inverse={true} />;
  }

  return (
    <div className={styles.container + "  custom-scroll pr-2"}>
      {orders?.map((order) => {
        let ingredientsInOrder: Array<TIngredient> = [];

        order.ingredients.forEach((id) => {
          ingredientsInOrder = [
            ...ingredientsInOrder,
            storeIngredients.find((ingredient) => ingredient._id === id)!,
          ];
        });

        return (
          <FeedCard
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

export { Feed };
