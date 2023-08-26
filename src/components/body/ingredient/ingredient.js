import styles from "./ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function Ingredient({ image, cost, description, count }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="preview" />
      </div>
      <div className={styles.costRow}>
        {/* <p style={{ display: "inline-block" }}>40</p> */}
        <span className="text text_type_digits-default">20</span>
        <CurrencyIcon />
      </div>
      <div className={styles.description}>
        <p className="text text_type_main-default">{description}</p>
      </div>
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
