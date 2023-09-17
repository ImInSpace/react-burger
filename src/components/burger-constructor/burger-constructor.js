import styles from "./burger-constructor.module.css";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";

function BurgerConstructor({ onDropHandler }) {
  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const constructorIngredients = useSelector(
    (store) => store.ingredients.constructorIngredients
  );

  return (
    <div
      className={
        styles.scrollContainer +
        " mt-25 custom-scroll " +
        (isHover ? styles.border : "")
      }
      ref={dropTarget}
    >
      <Bun bunInfo={constructorIngredients.bun} bunPosition={"top"} />
      {constructorIngredients.ingredients?.map((ingredientInfo, index) => {
        return (
          <Ingredient
            ingredientInfo={ingredientInfo}
            key={ingredientInfo.key}
            index={index}
          />
        );
      })}
      <Bun bunInfo={constructorIngredients.bun} bunPosition={"bottom"} />
    </div>
  );
}

export { BurgerConstructor };
