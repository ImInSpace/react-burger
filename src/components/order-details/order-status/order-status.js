import styles from "./order-status.module.css";

function OrderStatus() {
  return (
    <>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p
        className={
          styles.orderStatus + " text text_type_main-default mt-2 mb-20"
        }
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export { OrderStatus };
