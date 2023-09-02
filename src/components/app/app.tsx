import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../burger-constructor/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useState } from "react";
import { Modal } from "../modal/modal";

function App() {
  const [isOrderModalShown, setIsOrderModalShown] = useState(false);
  const [isIngredientModalShown, setIsIngredientModalShown] = useState(false);

  const openModalHandler = () => {
    setIsOrderModalShown(true);
  };

  const closeModalHandler = () => {
    setIsOrderModalShown(false);
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

      {isIngredientModalShown && (
        <Modal
          closeHandler={closeModalHandler}
          content={<IngredientDetails />}
          caption={"Детали ингредиента"}
        />
      )}

      {isOrderModalShown && (
        <Modal closeHandler={closeModalHandler} content={<OrderDetails />} />
      )}
    </div>
  );
}

export { App };
