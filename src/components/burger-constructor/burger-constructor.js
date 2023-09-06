import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorRow } from "./constructor-row/constructor-row";
import { useContext } from "react";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";

function BurgerConstructor() {
  const { ingredients } = useContext(BurgerConstructorContext);

  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      {ingredients?.map((details, index, arr) => {
        if (index === 0) {
          return (
            <ConstructorRow
              showDragIcon={false}
              key={"constructor_row_" + details._id}
            >
              <ConstructorElement
                type="top"
                text={details.name + " (верх)"}
                price={details.price}
                thumbnail={details.image}
              />
            </ConstructorRow>
          );
        } else if (index === arr.length - 1) {
          return (
            <ConstructorRow
              showDragIcon={false}
              key={"constructor_row_" + details._id}
            >
              <ConstructorElement
                type="bottom"
                text={details.name + " (низ)"}
                price={details.price}
                thumbnail={details.image}
              />
            </ConstructorRow>
          );
        } else {
          return (
            <ConstructorRow
              showDragIcon={true}
              key={"constructor_row_" + details._id}
            >
              <ConstructorElement
                text={details.name}
                price={details.price}
                thumbnail={details.image}
              />
            </ConstructorRow>
          );
        }
      })}
    </div>
  );
}

export { BurgerConstructor };
