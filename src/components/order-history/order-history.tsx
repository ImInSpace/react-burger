import styles from "./order-history.module.css";

interface IOrderHistoryProps {
  children?: JSX.Element;
}

function OrderHistory({ children }: IOrderHistoryProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}

export { OrderHistory };
