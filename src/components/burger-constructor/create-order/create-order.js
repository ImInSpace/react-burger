import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order.module.css";
import { Price } from "../../price/price";

function CreateOrder() {
  return (
    <>
      <div className={styles.container + " mt-5 mr-4"}>
        <div className="mr-5">
          <Price price={710} textSize="medium" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

export { CreateOrder };
