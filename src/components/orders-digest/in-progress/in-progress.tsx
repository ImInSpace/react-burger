import styles from "./in-progress.module.css";

interface IInProgressProps {
  headerText: string;
  orderNumbers: Array<number>;
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
      <div className={styles.orders + " custom-scroll"}>
        <ul className={styles.numbers_list}>
          {orderNumbers.map((number) => (
            <li key={number}>
              <p className="text text_type_main-medium text_color_inactive">
                0{number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { InProgress };
