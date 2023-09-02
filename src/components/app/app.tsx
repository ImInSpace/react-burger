import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { CreateOrder } from "../burger-constructor/create-order/create-order";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { useEffect, useState } from "react";
import { Modal } from "../modal/modal";
import { fetchData } from "../../utils/request-handler";
import * as Constants from "../../constants";
import PropTypes from "prop-types";

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    fetchData(Constants.INGREDIENTS_URL).then((json) =>
      setIngredientsData(json)
    );
  }, []);

  const [isOrderModalShown, setIsOrderModalShown] = useState(false);
  const [isIngredientModalShown, setIsIngredientModalShown] = useState(false);

  const openModalHandler = () => {
    setIsIngredientModalShown(true);
  };

  const closeModalHandler = () => {
    setIsIngredientModalShown(false);
  };

  const ingredientClickHandler = () => {
    // fetchData(Constants.INGREDIENTS_URL).then((json) =>
    //   console.log("Hell, yeah!", json)
    // );
  };

  ingredientClickHandler();

  ingredientClickHandler.propTypes = {
    ingredientId: PropTypes.string,
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <div className={styles.halfContainer}>
          <BurgerIngredients data={ingredientsData} />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor data={ingredientsData} />
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
