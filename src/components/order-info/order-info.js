import styles from "./order-info.module.css";
import doneIcon from "../../images/done.png";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.shadow}>
        <CloseIcon />
      </div>
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

export { OrderInfo };
