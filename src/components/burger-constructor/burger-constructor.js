import styles from "./burger-constructor.module.css";
import { useContext } from "react";
import { BurgerConstructorContext } from "../../context/burder-contstructor-context";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";

function BurgerConstructor() {
  const { ingredients, bun } = useContext(BurgerConstructorContext);

  const deleteElement = () => {
    console.log("on delete click!");
  };

  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      <Bun bunInfo={bun} bunPosition={"верх"} />
      {ingredients?.map((ingredientInfo) => {
        return <Ingredient ingredientInfo={ingredientInfo} />;
      })}
      <Bun bunInfo={bun} bunPosition={"низ"} />
    </div>
  );
}

export { BurgerConstructor };
