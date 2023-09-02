import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../burger-constructor/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useState } from "react";

function App() {
  const [isModalShown, setIsModalShown] = useState(true);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <div className={styles.halfContainer}>
          <BurgerIngredients />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor />
          <CreateOrder clickHandler={openModalHandler} />
        </div>
      </div>

      {isModalShown && <IngredientDetails closeHandler={closeModalHandler} />}
    </div>
  );
}

export { App };
