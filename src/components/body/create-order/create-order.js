import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order.module.css";
import { Price } from "../price/price";

function CreateOrder(props) {
  return (
    <div className={styles.container + " mt-10 mr-4"}>
      <div>
        <Price price={710} textSize="medium" />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

export { CreateOrder };
