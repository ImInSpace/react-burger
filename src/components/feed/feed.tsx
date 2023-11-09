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
  const storeIngredients = useSelector(
    (store) => store.ingredients.ingredients
  );

  // Заказы не загрузились? Показываем загрузчик.
  if (orders === undefined) {
    return <Loader size="large" inverse={true} />;
  }

  console.log("orders: ", orders);

  return (
    <div className={styles.container + "  custom-scroll pr-2"}>
      {orders?.map((order) => {
        let ingredientsInOrder: Array<TIngredient> = [];

        order.ingredients.forEach((id) => {
          if (!storeIngredients.some((x) => x._id === id)) return;

          ingredientsInOrder = [
            ...ingredientsInOrder,
            storeIngredients.find((ingredient) => ingredient._id === id)!,
          ];
        });

        return (
          <FeedCard
            order={order}
            burgerName={order.name}
            ingredients={ingredientsInOrder!}
            key={order._id}
          />
        );
      })}
    </div>
  );
}

export { Feed };
