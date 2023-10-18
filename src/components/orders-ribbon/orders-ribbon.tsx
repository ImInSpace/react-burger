import { HistoryItem } from "./history-item/history-item";
import styles from "./orders-ribbon.module.css";

interface IOrderHistoryProps {
  children?: JSX.Element;
}

function OrdersRibbon(): JSX.Element {
  return (
    <div className={styles.container + "  custom-scroll pr-2"}>
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  );
}

export { OrdersRibbon };
