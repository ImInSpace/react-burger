import PropTypes from "prop-types";
import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuidv4 } from "uuid";

function Bun({ bunInfo, bunPosition }) {
  if (bunInfo == null) return null;

  return (
    <ConstructorRow showDragIcon={false} key={"ingredient_" + uuidv4()}>
      <ConstructorElement
        type={bunPosition}
        text={bunInfo.name + (bunPosition === "top" ? "верх" : "низ")}
        price={bunInfo.price}
        thumbnail={bunInfo.image}
        isLocked={true}
      />
    </ConstructorRow>
  );
}

Bun.propTypes = {
  bunInfo: ingredientDataShape,
  bunPosition: PropTypes.oneOf(["top", "bottom"]),
};

export { Bun };
