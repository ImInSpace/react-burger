import { Price } from "../../common/price/price";
import { Ingredients } from "./ingredients/ingredients";
import styles from "./history-item.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../../services/types";
import { TIngredient } from "../../../services/types/data";

interface IHistoryItemProps {
  orderNumber: number;
  burgerName: string;
  ingredients: Array<TIngredient> | null;
  createdAt: string;
}

function HistoryItem({
  orderNumber,
  burgerName,
  ingredients,
  createdAt,
}: IHistoryItemProps): JSX.Element {
  let price: number = 0;
  const icons: Array<string> = ingredients!.map(
    (ingredient) => ingredient.image
  );

  ingredients!.map((ingredient) => {
    price += ingredient.price;
  });

  return (
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
  );
}

export { HistoryItem };
