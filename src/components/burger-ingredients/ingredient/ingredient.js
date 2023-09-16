import styles from "./ingredient.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../../common/price/price";
import { ingredientDataShape } from "../../../utils/prop-types";
import { useDispatch } from "react-redux";
import {
  ADD_INGREDIENT,
  OPEN_INGREDIENTS_DETAILS,
} from "../../../services/actions/ingredients";

function Ingredient({ ingredientInfo }) {
  const dispatch = useDispatch();

  const showIngredientInfo = (id) => {
    dispatch({
      type: OPEN_INGREDIENTS_DETAILS,
      id: id,
    });

    dispatch({
      type: ADD_INGREDIENT,
      id: id,
    });
  };

  return (
    <div
      className={styles.card}
      onClick={() => showIngredientInfo(ingredientInfo._id)}
    >
      {ingredientInfo.count && (
        <div className={styles.counter}>
          <Counter
            count={ingredientInfo.count}
            size="default"
            extraClass="mr-5"
          />
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
