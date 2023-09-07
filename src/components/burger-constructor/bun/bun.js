import PropTypes from "prop-types";
import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function Bun({ bunInfo, bunPosition }) {
  if (bunInfo == null) return null;

  return (
    <ConstructorRow showDragIcon={false} key={"constructor_row_" + bunInfo._id}>
      <ConstructorElement
        type="top"
        text={bunInfo.name + " (" + bunPosition + ")"}
        price={bunInfo.price}
        thumbnail={bunInfo.image}
        isLocked={true}
      />
    </ConstructorRow>
  );
}

Bun.propTypes = {
  bunInfo: ingredientDataShape,
  bunPosition: PropTypes.oneOf(["верх", "низ"]),
};

export { Bun };
