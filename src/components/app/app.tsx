import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../burger-constructor/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <div className={styles.halfContainer}>
          <BurgerIngredients />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor />
          <CreateOrder />
        </div>
      </div>
    </>
  );
}

export { App };
