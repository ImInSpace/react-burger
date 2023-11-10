import { Price } from "../../common/price/price";
import { IngredientIcon } from "../../feed/feed-card/ingredients/ingredient-icon/ingredient-icon";
import styles from "./compound-row.module.css";

interface ICompoundRow {
  icon: string;
  ingredientName: string;
  quantity: number;
  price: number;
}

function CompoundRow({ icon, ingredientName, quantity, price }: ICompoundRow) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <IngredientIcon icon={icon} />
      </div>
      <div className={styles.title}>
        <p className={"text text_type_main-default"}>{ingredientName}</p>
      </div>
      <div className={styles.price}>
        <Price price={`${quantity} x ${price}`} textSize="default" />
      </div>
    </div>
  );
}

export { CompoundRow };
