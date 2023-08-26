import styles from "./ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function Ingredient({ image, cost, description, count }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="preview" />
      </div>
      <div className={styles.costRow}>
        <span className="text text_type_digits-default">{cost}</span>
        <CurrencyIcon />
      </div>
      <div className={styles.description}>
        <p className="text text_type_main-default">{description}</p>
      </div>
      {count && (
        <div className={styles.counter}>
          <Counter count={count} size="default" extraClass="mr-5" />
        </div>
      )}
    </div>
  );
}

export { Ingredient };

Ingredient.propTypes = {
  image: PropTypes.string,
  cost: PropTypes.number,
  description: PropTypes.string,
  count: PropTypes.number,
};
