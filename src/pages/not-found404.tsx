import { OrderHistoryItem } from "../components/ui/order-history-item/order-history-item";
import styles from "./not-found404.module.css";

export default function NotFound404Page(): JSX.Element {
  return (
    <>
      <OrderHistoryItem />
      <h1 className={styles.text}>¯\_(ツ)_/¯</h1>
      <h1 className={styles.text}>Ой, а где это мы ?</h1>
    </>
  );
}
