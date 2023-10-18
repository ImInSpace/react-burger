import styles from "./in-progress.module.css";

interface IInProgressProps {
  headerText: string;
  orderNumbers: Array<string>;
}

function InProgress({
  headerText,
  orderNumbers,
}: IInProgressProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className="text text_type_main-medium">{headerText}</p>
      </div>
      <div className={styles.orders}>
        <ul>
          {orderNumbers.map((number) => (
            <li key={number}>
              <p className="text text_type_main-default text_color_inactive">
                {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { InProgress };
