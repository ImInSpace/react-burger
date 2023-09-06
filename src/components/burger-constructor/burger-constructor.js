import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorRow } from "./constructor-row/constructor-row";
import { useContext } from "react";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";
import { Bun } from "./bun/bun";

function BurgerConstructor() {
  const { ingredients, bun } = useContext(BurgerConstructorContext);

  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      <Bun bunInfo={bun} bunPosition={"верх"} />
      {ingredients?.map((ingredientInfo) => {
        return (
          <ConstructorRow
            showDragIcon={true}
            key={"constructor_row_" + ingredientInfo._id}
          >
            <ConstructorElement
              text={ingredientInfo.name}
              price={ingredientInfo.price}
              thumbnail={ingredientInfo.image}
            />
          </ConstructorRow>
        );
      })}
      <Bun bunInfo={bun} bunPosition={"низ"} />
    </div>
  );
}

export { BurgerConstructor };
