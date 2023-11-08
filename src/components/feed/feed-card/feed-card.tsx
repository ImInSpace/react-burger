import { Price } from "../../common/price/price";
import { Ingredients } from "./ingredients/ingredients";
import styles from "./feed-card.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../../services/types/data";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../../services/types";
import { wsFeedSelectFeedAction } from "../../../services/actions/wsFeed";

interface IFeedCardProps {
  orderNumber: number;
  burgerName: string;
  ingredients: Array<TIngredient> | null;
  createdAt: string;
}

function FeedCard({
  orderNumber,
  burgerName,
  ingredients,
  createdAt,
}: IFeedCardProps): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentOrder = useSelector((store) =>
    store.wsFeedReducer.message?.orders.find(
      (order) => order.number === orderNumber
    )
  );

  const icons: Array<string> = ingredients!.map(
    (ingredient) => ingredient.image
  );

  const price: number = ingredients?.reduce(
    (cur, prev) => cur + prev.price,
    0
  )!;

  const selectFeed = () => {
    dispatch(wsFeedSelectFeedAction(currentOrder!));
  };

  return (
    <Link
      to={`${location.pathname}/${orderNumber}`}
      state={{ backgroundLocation: location }}
      className={styles.link}
      onClick={() => selectFeed()}
    >
      <div className={styles.container}>
        <div className={styles.orderNumberRow}>
          <p className="text text_type_main-default">{`#0${orderNumber}`}</p>
          <p className={styles.time}>
            <FormattedDate date={new Date(createdAt)} />
          </p>
        </div>
        <div className={styles.burgerName}>
          <p className="text text_type_main-medium">{burgerName}</p>
        </div>
        <div className={styles.ingredients}>
          <Ingredients iconsUrl={icons} />
          <div className={styles.price}>
            <Price price={price} textSize="default" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export { FeedCard };
