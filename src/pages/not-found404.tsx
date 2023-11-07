import { IngredientIcon } from "../components/orders-ribbon/history-item/ingredients/ingredient-icon/ingredient-icon";
import styles from "./not-found404.module.css";

export default function NotFound404Page(): JSX.Element {
  let numbers: Array<string>;
  numbers = ["034525", "034526", "034531", "034532", "034533"];

  return (
    <>
      {/* <InProgress headerText="Готовы: " orderNumbers={numbers} /> */}
      {/* <Total caption="Выполнено за все время:" number={28752} /> */}
      {/* <OrdersDigest /> */}
      <h1 className={styles.text}>¯\_(ツ)_/¯</h1>
      <h1 className={styles.text}>Ой, а где это мы ?</h1>
    </>
  );
}
