import { Ingredient } from "../ingredient/ingredient";
import PropTypes from "prop-types";
import styles from "./grouped-ingredients.module.css";
import { ingredientDataShape } from "../../../utils/prop-types";

function GroupedIngredients(props) {
  return (
    <>
      <p id={props.anchor} className="text text_type_main-medium mt-10">
        {props.groupName}
      </p>
      <div className={styles.table}>
        {props.ingredients?.map((ingredient) => {
          return (
            <Ingredient
              id={ingredient._id}
              price={ingredient.price}
              image={ingredient.image}
              name={ingredient.name}
              count={undefined}
              key={"ingredient_" + ingredient._id}
              handler={props.handler}
            />
          );
        })}
      </div>
    </>
  );
}

export { GroupedIngredients };

GroupedIngredients.propTypes = {
  ingredient: ingredientDataShape,
  groupName: PropTypes.string,
  anchor: PropTypes.string,
  handler: PropTypes.func,
};
