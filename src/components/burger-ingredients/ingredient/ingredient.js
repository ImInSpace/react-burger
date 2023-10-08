import styles from "./ingredient.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../../common/price/price";
import { ingredientDataShape } from "../../../utils/prop-types";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Ingredient({ ingredientInfo }) {
  const location = useLocation();
  const data = useSelector(
    (store) => store.ingredients.constructorIngredients.ingredients
  );

  const counter = useMemo(() => {
    return data.filter((ingredient) => ingredient._id === ingredientInfo._id)
      .length;
  }, [data, ingredientInfo]);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { id: ingredientInfo._id },
  });

  const showIngredientInfo = (id) => {};

  return (
    <Link
      to={`/ingredients/${ingredientInfo._id}`}
      state={{ backgroundLocation: location }}
      className={styles.link}
    >
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
    </Link>
  );
}

export { Ingredient };

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape.isRequired,
};
