import styles from "./orders-counter.module.css";

function OrdersCounter() {
  return (
    <div className={styles.container}>
      <div className={styles.orders}>
        {/* <div className={styles.ready}>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <p className="text text_type_main-medium">Готовы:</p>
            </div>
            <div className={styles.tableRow}>034533</div>
            <div className={styles.tableRow}>034532</div>
            <div className={styles.tableRow}>034531</div>
            <div className={styles.tableRow}>034534</div>
            <div className={styles.tableRow}>034535</div>
          </div>
        </div>
        <div className={styles.inProgress}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeader}>
              <p className="text text_type_main-medium">В работе:</p>
            </div>
          </div>
          <div className={styles.tableRow}>034533</div>
          <div className={styles.tableRow}>034532</div>
          <div className={styles.tableRow}>034531</div>
        </div> */}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export { OrdersCounter };
