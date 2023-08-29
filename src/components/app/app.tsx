import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../burger-constructor/create-order/create-order";
import { OrderInfo } from "../order-info/order-info";
import { IngredientDetails } from "../ingredient-details/ingredient-details";

function App() {
  return (
    <>
      <AppHeader />
      <IngredientDetails />
      {/* <OrderInfo /> */}
      <div className={styles.container}>
        {/* <div className={styles.halfContainer}>
          <BurgerIngredients />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor />
          <CreateOrder />
        </div> */}
      </div>
    </>
  );
}

export { App };
