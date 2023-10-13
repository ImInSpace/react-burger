import styles from "./ingredient.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../../common/price/price";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { IIngredientDataShape } from "../../../utils/prop-types";

interface IIngredientProps {
  ingredientInfo: IIngredientDataShape;
}

function Ingredient({ ingredientInfo }: IIngredientProps): JSX.Element {
  const location = useLocation();
  const { ingredients, bun } = useSelector(
    // @ts-ignore
    (store) => store.ingredients.constructorIngredients
  );

  let counter = 0;

  counter = useMemo(() => {
    return ingredients.filter(
      (ingredient: IIngredientDataShape) =>
        ingredient._id === ingredientInfo._id
    ).length;
  }, [ingredients, ingredientInfo]);

  if (bun && bun._id === ingredientInfo._id) {
    counter = 2;
  }

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { id: ingredientInfo._id },
  });

  return (
    <Link
      to={`/ingredients/${ingredientInfo._id}`}
      state={{ backgroundLocation: location }}
      className={styles.link}
    >
      <div className={styles.card} ref={dragRef}>
        {counter > 0 && (
          <div className={styles.counter}>
            <Counter count={counter} size="default" extraClass="mr-5" />
          </div>
        )}
        <div className={styles.image}>
          <img
            src={ingredientInfo.image}
            alt={"Изображение для " + ingredientInfo.name}
          />
        </div>
        <div className={styles.costRow}>
          <Price price={ingredientInfo.price} className={styles.costRow} />
        </div>
        <div className={styles.description}>
          <p className="text text_type_main-default">{ingredientInfo.name}</p>
        </div>
      </div>
    </Link>
  );
}

export { Ingredient };

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape.isRequired,
};
