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
      <div className={styles.ingredients}></div>
    </div>
  );
}

export { OrderHistoryItem };
