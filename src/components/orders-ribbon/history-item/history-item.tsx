import { Price } from "../../common/price/price";
import { Ingredients } from "./ingredients/ingredients";
import styles from "./history-item.module.css";

function HistoryItem(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.orderNumberRow}>
        <p className="text text_type_main-default">#034535</p>
        <p className={styles.time}>Сегодня, 16:20</p>
      </div>
      <div className={styles.burgerName}>
        <p className="text text_type_main-medium">
          Death Star Starship Main бургер
        </p>
      </div>
      <div className={styles.ingredients}>
        <Ingredients />
        <div className={styles.price}>
          <Price price={150} textSize="default" />
        </div>
      </div>
    </div>
  );
}

export { HistoryItem };
