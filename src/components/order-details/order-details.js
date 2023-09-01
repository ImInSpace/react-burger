import styles from "./order-details.module.css";
import iconDone from "../../images/done.png";
import { Modal } from "../modal/modal";

function OrderDetails() {
  return (
    <Modal>
      <div className={styles.container}>
        <OrderNumber />
        <img className="mt-15" src={iconDone} alt="order icon" />
        <OrderStatus />
      </div>
    </Modal>
  );
}

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

export { OrderDetails };
/* 
function OrderDetails() {
  return (
    <div className={styles.container}>
      <p className={styles.orderNumber + " text text_type_digits-large mt-30"}>
        034536
      </p>
      <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
      <img className="mt-15" src={doneIcon} alt="order icon" />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className={styles.waitForOrder + " text text_type_main-default mt-2"}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
 */
