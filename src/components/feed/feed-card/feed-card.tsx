import { Price } from "../../common/price/price";
import { Ingredients } from "./ingredients/ingredients";
import styles from "./feed-card.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../../services/types/data";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../../services/types";
import { wsFeedSelectFeedAction } from "../../../services/actions/wsFeed";
import { useMemo } from "react";
import { TOrder } from "../../../utils/api-shape";

interface IFeedCardProps {
  order: TOrder;
  burgerName: string;
  ingredients: Array<TIngredient> | null;
}

function FeedCard({
  order,
  burgerName,
  ingredients,
}: IFeedCardProps): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentOrder = useSelector((store) =>
    store.wsFeedReducer.message?.orders.find(
      (order) => order.number === order.number
    )
  );

  const tmp = ingredients?.map((x) => {
    if (x !== undefined) {
      return x;
    }
  });

  const price: number = useMemo(() => {
    return tmp?.reduce((cur, prev) => cur + prev!.price, 0)!;
  }, [tmp]);

  const selectFeed = () => {
    dispatch(wsFeedSelectFeedAction(currentOrder!));
  };

  return (
    <Link
      to={`${location.pathname}/${order.number}`}
      state={{ backgroundLocation: location }}
      className={styles.link}
      onClick={() => selectFeed()}
    >
      <div className={styles.container}>
        <div className={styles.orderNumberRow}>
          <p className="text text_type_main-default">{`#0${order.number}`}</p>
          <p className={styles.time}>
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
        </div>
        <div className={styles.burgerName}>
          <p className="text text_type_main-medium">{burgerName}</p>
        </div>
        <div className={styles.ingredients}>
          <Ingredients order={currentOrder!} />
          <div className={styles.price}>
            <Price price={price} textSize="default" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export { FeedCard };
