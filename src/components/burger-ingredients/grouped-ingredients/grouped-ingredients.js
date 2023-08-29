import { Ingredient } from "../ingredient/ingredient";
import PropTypes from "prop-types";
import styles from "./grouped-ingredients.module.css";

function GroupedIngredients(props) {
  return (
    <div className={styles.table}>
      {props.ingredients.map((ingredient) => {
        return (
          <Ingredient
            price={ingredient.price}
            image={ingredient.image}
            name={ingredient.name}
            count={1}
            key={"ingredient_" + ingredient._id}
          />
        );
      })}
    </div>
  );
}

export { GroupedIngredients };

const ingredientDataShape = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
});

GroupedIngredients.propTypes = {
  ingredient: ingredientDataShape,
};
