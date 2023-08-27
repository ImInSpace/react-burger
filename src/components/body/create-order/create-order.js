import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order.module.css";

function CreateOrder(props) {
  return (
    <div styles={styles.container}>
      <div className={styles.costRow}>
        <span className="text text_type_digits-default">610</span>
        <CurrencyIcon />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

export { CreateOrder };
