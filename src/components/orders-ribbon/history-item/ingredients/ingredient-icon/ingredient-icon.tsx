import styles from "./ingredient-icon.module.css";

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
          <div className={styles.ingredientForeground}></div>
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
