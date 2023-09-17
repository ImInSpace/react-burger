import styles from "./ingredient.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../../common/price/price";
import { ingredientDataShape } from "../../../utils/prop-types";
import { useDispatch } from "react-redux";
import { OPEN_INGREDIENTS_DETAILS } from "../../../services/actions/ingredients";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function Ingredient({ ingredientInfo }) {
  const dispatch = useDispatch();
  const data = useSelector(
    (store) => store.ingredients.constructorIngredients.ingredients
  );

  const counter = useMemo(() => {
    return data.filter((ingredient) => ingredient._id === ingredientInfo._id)
      .length;
  }, [data, ingredientInfo]);

  const [{ isHover }, dragRef] = useDrag({
    type: "ingredient",
    item: { id: ingredientInfo._id },
  });

  const showIngredientInfo = (id) => {
    dispatch({
      type: OPEN_INGREDIENTS_DETAILS,
      id: id,
    });
  };

  return (
    <div
      className={styles.card}
      onClick={() => showIngredientInfo(ingredientInfo._id)}
      ref={dragRef}
    >
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
  );
}

export { Ingredient };

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape.isRequired,
};
