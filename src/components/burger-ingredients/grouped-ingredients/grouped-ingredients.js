import { Ingredient } from "../ingredient/ingredient";
import PropTypes from "prop-types";
import styles from "./grouped-ingredients.module.css";
import { ingredientDataShape } from "../../../utils/prop-types";

function GroupedIngredients(props) {
  return (
    <>
      <p className="text text_type_main-medium mt-10">{props.groupName}</p>
      <div className={styles.table}>
        {props.ingredients?.map((ingredient) => {
          return (
            <Ingredient
              ingredientInfo={ingredient}
              count={undefined}
              key={ingredient._id}
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
  groupName: PropTypes.string.isRequired,
};
