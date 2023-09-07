import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function Ingredient({ ingredientInfo, onDeleteHandler }) {
  return (
    <ConstructorRow showDragIcon={true}>
      <ConstructorElement
        text={ingredientInfo.name}
        price={ingredientInfo.price}
        thumbnail={ingredientInfo.image}
        handleClose={() => onDeleteHandler(ingredientInfo)}
      />
    </ConstructorRow>
  );
}

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape,
};

export { Ingredient };
