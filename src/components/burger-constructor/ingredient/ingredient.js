import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../services/actions/ingredients";
import PropTypes from "prop-types";

function Ingredient({ ingredientInfo, index }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ConstructorRow showDragIcon={true}>
        <ConstructorElement
          text={ingredientInfo.name}
          price={ingredientInfo.price}
          thumbnail={ingredientInfo.image}
          handleClose={() =>
            dispatch({ type: REMOVE_INGREDIENT, id: ingredientInfo._id })
          }
        />
      </ConstructorRow>
    </div>
  );
}

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape.isRequired,
  index: PropTypes.number.isRequired,
};

export { Ingredient };
