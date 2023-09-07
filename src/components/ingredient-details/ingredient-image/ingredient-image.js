import PropTypes from "prop-types";
import styles from "./ingredient-image.module.css";

function IngredientImage({ img }) {
  return (
    <div className={styles.image}>
      <img src={img} alt="Изображение ингредиента"></img>
    </div>
  );
}

IngredientImage.propTypes = {
  img: PropTypes.string.isRequired,
};

export { IngredientImage };
