import { useSelector } from "../../services/types";
import { TIngredient } from "../../services/types/data";
import styles from "./feed.module.css";
import { Loader } from "../ui/loader/loader";
import { FeedCard } from "./feed-card/feed-card";
import { TOrder } from "../../utils/api-shape";

interface IFeedProps {
  orders: ReadonlyArray<TOrder>;
}

function Feed({ orders }: IFeedProps): JSX.Element {
  console.log("feed: ");

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
