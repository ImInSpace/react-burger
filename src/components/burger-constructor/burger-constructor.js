import styles from "./burger-constructor.module.css";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";
import { v4 as uuid } from "uuid";
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

  const border = {
    outline: "2px dashed gray",
    borderRadius: "5px",
  };

  const hoverStyle = isHover ? border : null;

  return (
    <div
      className={styles.scrollContainer + " mt-25 custom-scroll"}
      ref={dropTarget}
      style={hoverStyle}
    >
      <Bun bunInfo={constructorIngredients.bun} bunPosition={"top"} />
      {constructorIngredients.ingredients?.map((ingredientInfo) => {
        return (
          <Ingredient
            ingredientInfo={ingredientInfo}
            key={"ingredient_" + uuid()}
          />
        );
      })}
      <Bun bunInfo={constructorIngredients.bun} bunPosition={"bottom"} />
    </div>
  );
}

export { BurgerConstructor };
