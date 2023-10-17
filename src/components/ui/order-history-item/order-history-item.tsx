import { Price } from "../../common/price/price";
import styles from "./order-history-item.module.css";

function OrderHistoryItem(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.orderNumberRow}>
        <p className="text text_type_main-small">#034535</p>
        <p className={styles.time}>Сегодня, 16:20</p>
      </div>
      <div className={styles.burgerName}>
        <p className="text text_type_main-medium">
          Death Star Starship Main бургер
        </p>
      </div>
      <div className={styles.ingredients}>
        <div className={styles.ingredientsContainer}>
          <div className={styles.ingredient}></div>
          <div className={styles.ingredient}></div>
          <div className={styles.ingredient}></div>
          <div className={styles.ingredient}></div>
          <div className={styles.ingredient}></div>
          <div className={styles.ingredient}>
            <div className={styles.ingredientForeground}>
              <p className={styles.ingredientPlus}>+30000000</p>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <Price price={150} textSize="default" />
        </div>
      </div>
    </div>
  );
}

export { OrderHistoryItem };
