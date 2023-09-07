import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorRow } from "./constructor-row/constructor-row";
import { useContext } from "react";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";
import { Bun } from "./bun/bun";

function BurgerConstructor() {
  const { ingredients, bun } = useContext(BurgerConstructorContext);

  const deleteElement = () => {
    console.log('on delete click!');
  }

  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      <Bun bunInfo={bun} bunPosition={"верх"} />
      {ingredients?.map((ingredientInfo) => {
        return (
          <ConstructorRow
            showDragIcon={true}            
             // Два одинаковых ингредиента, могут быть добавлены в конструктор бургеров.               
            key={"constructor_row_" + crypto.randomUUID()}
          >
            <ConstructorElement
              text={ingredientInfo.name} 
              price={ingredientInfo.price}
              thumbnail={ingredientInfo.image}
              handleClose={deleteElement}
            />
          </ConstructorRow>
        );
      })}
      <Bun bunInfo={bun} bunPosition={"низ"} />
    </div>
  );
}

export { BurgerConstructor };
