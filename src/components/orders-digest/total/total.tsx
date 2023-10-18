import styles from "./total.module.css";

interface ITotalProps {
  caption: string;
  number: number;
}

function Total({ caption, number }: ITotalProps): JSX.Element {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium">{caption}</p>
      <div className={styles.number}>
        <p className="text text_type_digits-large">{number}</p>
      </div>
    </div>
  );
}

export { Total };
