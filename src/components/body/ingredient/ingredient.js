import styles from "./ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function Ingredient({ image, price, name, count }) {
  return (
    <div className={styles.card}>
      {count && (
        <div className={styles.counter}>
          <Counter count={count} size="default" extraClass="mr-5" />
        </div>
      )}
      <div className={styles.image}>
        <img src={image} alt={"Изображение для " + name} />
      </div>
      <div className={styles.costRow}>
        <span className="text text_type_digits-default">{price}</span>
        <CurrencyIcon />
      </div>
      <div className={styles.description}>
        <p className="text text_type_main-default">{name}</p>
      </div>
    </div>
  );
}

export { Ingredient };

Ingredient.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  count: PropTypes.number,
};
