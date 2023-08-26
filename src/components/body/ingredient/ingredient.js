import styles from "./ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function Ingredient(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.costRow}>
        <p style={{ display: "inline-block" }}>40</p>
        <CurrencyIcon />
      </div>
      <div className={styles.description}></div>
    </div>
  );
}

export { Ingredient };
