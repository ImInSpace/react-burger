import styles from "./ingredient-icon.module.css";

function IngredientIcon(): JSX.Element {
  return <div className={styles.ingredient}></div>;
  {
    /* <div className={styles.ingredient}>
            <div className={styles.ingredientForeground}>
              <p className={styles.ingredientPlus}>+30000000</p>
            </div>
          </div> */
  }
}

export { IngredientIcon };
