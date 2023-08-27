import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { CreateOrder } from "../create-order/create-order";
import styles from "./app-body.module.css";

function AppBody() {
  return (
    <div className={styles.container}>
      <div className={styles.halfContainer}>
        <BurgerIngredients />
      </div>
      <div className={styles.halfContainer}>
        <BurgerConstructor />
        <CreateOrder />
      </div>
    </div>
  );
}

export { AppBody };
