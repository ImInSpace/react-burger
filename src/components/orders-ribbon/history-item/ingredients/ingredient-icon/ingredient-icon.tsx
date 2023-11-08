import styles from "./ingredient-icon.module.css";
import cn from "classnames";

interface IIngredientIcon {
  icon: string;
  isCounterShown?: boolean;
  number?: number;
}

function IngredientIcon({
  icon,
  isCounterShown = false,
  number,
}: IIngredientIcon): JSX.Element {
  return (
    <div className={styles.ingredient}>
      {isCounterShown && (
        <>
          <div
            className={cn(
              styles.ingredientForeground,
              styles.liftUp && isCounterShown
            )}
          ></div>
          <p
            className={styles.foregroundText + " text text_type_digits-default"}
          >
            +{number}
          </p>
        </>
      )}
      <img
        className={styles.icon}
        src={icon}
        alt="Изображение ингредиента"
      ></img>
    </div>
  );
}

export { IngredientIcon };
