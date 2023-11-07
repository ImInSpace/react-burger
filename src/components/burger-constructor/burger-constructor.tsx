import styles from "./burger-constructor.module.css";
import { Bun } from "./bun/bun";
import { Ingredient } from "./ingredient/ingredient";
import { useDrop } from "react-dnd";
import { IIngredientDataShape } from "../../utils/api-shape";
import { addIngredient } from "../../services/actions/ingredients";
import { IDragObject } from "../../utils/common-types";
import { useDispatch, useSelector } from "../../services/types";

function BurgerConstructor(): JSX.Element {
  const dispatch = useDispatch();

  const handleDrop = (dragItem: IDragObject) => {
    dispatch(addIngredient(dragItem.id));
  };

  const [{ isHover }, dropTarget] = useDrop<
    IDragObject,
    unknown,
    { isHover: boolean }
  >({
    accept: "ingredient",
    drop(item) {
      handleDrop(item);
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
      {constructorIngredients.ingredients?.map(
        (
          ingredientInfo: IIngredientDataShape & { key: string },
          index: number
        ) => {
          return (
            <Ingredient
              ingredientInfo={ingredientInfo}
              key={ingredientInfo.key}
              index={index}
            />
          );
        }
      )}
      <Bun bunInfo={constructorIngredients.bun} bunPosition={"bottom"} />
    </div>
  );
}

export { BurgerConstructor };