import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import styles from "./app-body.module.css";

function AppBody() {
  return (
    <div className={styles.container}>
      <div className={styles.halfContainer}>
        <BurgerIngredients />
      </div>
      <div className={styles.halfContainer}>Container 2</div>
    </div>
  );
}

export { AppBody };
