import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./price.module.css";

interface IPriceProps {
  price: number | string;
  textSize: "default" | "medium" | "large" | "small";
}

function Price({ price, textSize }: IPriceProps): JSX.Element {
  return (
    <div className={styles.costRow}>
      <span className={"text text_type_digits-" + textSize}>{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export { Price };
