import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../services/actions/ingredients";

function Ingredient({ ingredientInfo }) {
  const dispatch = useDispatch();

  return (
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
  );
}

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape.isRequired,
};

export { Ingredient };
