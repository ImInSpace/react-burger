import { useSelector } from "../../../../services/types";
import { TOrder } from "../../../../utils/api-shape";
import { IngredientIcon } from "./ingredient-icon/ingredient-icon";
import styles from "./ingredients.module.css";
import { v4 as uuid } from "uuid";

interface IIngredientsProps {
  order: TOrder;
}

function Ingredients({ order }: IIngredientsProps): JSX.Element {
  const iconsLimit: number = 5;

  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const ingredientsInOrder = order.ingredients.map((id) => {
    const temp = ingredients.find((ing) => ing._id === id);
    if (temp !== undefined) {
      return temp;
    }
  });

  return (
    <div className={styles.container}>
      {ingredientsInOrder.map((ingredient, index) => {
        if (index < iconsLimit)
          return (
            <IngredientIcon
              icon={ingredient?.image_mobile!}
              key={order.number + index}
            />
          );
        if (index === iconsLimit) {
          return (
            <IngredientIcon
              icon={ingredient?.image_mobile!}
              isCounterShown={true}
              number={ingredientsInOrder.length - index}
              key={order.number + index}
            />
          );
        }
      })}
    </div>
  );
}

export { Ingredients };
