import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuid } from "uuid";

function Ingredient({ ingredientInfo, onDeleteHandler }) {
  return (
    <ConstructorRow
      showDragIcon={true}
      // Два одинаковых ингредиента, могут быть добавлены в конструктор бургеров.
      key={"ingredient_" + uuid()}
    >
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
