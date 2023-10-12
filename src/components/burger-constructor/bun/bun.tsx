import PropTypes from "prop-types";
import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

interface IBunProps {
  bunInfo: {
    name: string;
    price: number;
    image: string;
  };

  bunPosition: "top" | "bottom";
}

function Bun({ bunInfo, bunPosition }: IBunProps): JSX.Element | null {
  if (bunInfo == null) return null;

  return (
    <ConstructorRow showDragIcon={false}>
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
  bunPosition: PropTypes.oneOf(["top", "bottom"]).isRequired,
};

export { Bun };
