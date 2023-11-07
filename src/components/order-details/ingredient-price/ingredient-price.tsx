import { Price } from "../../common/price/price";
import { IngredientIcon } from "../../orders-ribbon/history-item/ingredients/ingredient-icon/ingredient-icon";
import styles from "./ingredient-price.module.css";

interface IIngredientPrice {
  icon: string;
  ingredientName: string;
  quantity: number;
  price: number;
}

function IngredientPrice({
  icon,
  ingredientName,
  quantity,
  price,
}: IIngredientPrice) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{/* <IngredientIcon /> */}</div>
      <div className={styles.title}>
        <p className={"text text_type_main-default"}>{ingredientName}</p>
      </div>
      <div className={styles.price}>
        <Price price={`${quantity} x ${price}`} textSize="default" />
      </div>
    </div>
  );
}

export { IngredientPrice };
