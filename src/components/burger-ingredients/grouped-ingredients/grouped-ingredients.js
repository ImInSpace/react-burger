import { Ingredient } from "../ingredient/ingredient";
import PropTypes from "prop-types";
import styles from "./grouped-ingredients.module.css";
import { ingredientDataShape } from "../../../utils/prop-types";
import { useDispatch } from "react-redux";
import { OPEN_INGREDIENTS_DETAILS } from "../../../services/actions/ingredients";

function GroupedIngredients(props) {
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch({
      type: OPEN_INGREDIENTS_DETAILS,
      id: id,
    });
  };
  return (
    <>
      <p id={props.anchor} className="text text_type_main-medium mt-10">
        {props.groupName}
      </p>
      <div className={styles.table}>
        {props.ingredients?.map((ingredient) => {
          return (
            <Ingredient
              ingredientInfo={ingredient}
              count={undefined}
              onClickHandler={() => clickHandler(ingredient._id)}
              key={"ingredient_" + ingredient._id}
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
  anchor: PropTypes.string.isRequired,
};
