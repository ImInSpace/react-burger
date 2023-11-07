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
            +3
          </p>
        </>
      )}
      <img className={styles.icon} src={icon}></img>
    </div>
  );
  {
    /* <div className={styles.ingredient}>
            <div className={styles.ingredientForeground}>
              <p className={styles.ingredientPlus}>+30000000</p>
            </div>
          </div> */
  }
}

export { IngredientIcon };
