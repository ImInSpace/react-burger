import styles from "./order-number.module.css";

function OrderNumber() {
  return (
    <>
      <p className={styles.orderNumber + " text text_type_digits-large mt-20"}>
        034536
      </p>
      <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
    </>
  );
}

export { OrderNumber };
