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
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    fetchData(Constants.INGREDIENTS_URL).then((json) =>
      setIngredientsData(json)
    );
  }, []);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
    setSelectedIngredient(null);
  };

  function ingredientClickHandler(ingredientId) {
    const selected = ingredientsData.data.find(
      (ingredient) => ingredient._id === ingredientId
    );

    if (selected == null) {
      console.error("Ингредиент не обнаружен. {id}: ", ingredientId);
    }

    setSelectedIngredient(
      ingredientsData.data.find((ingredient) => ingredient._id === ingredientId)
    );
    openModalHandler();
  }

  ingredientClickHandler.propTypes = {
    ingredientId: PropTypes.number,
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <div className={styles.halfContainer}>
          <BurgerIngredients
            data={ingredientsData}
            handler={ingredientClickHandler}
          />
        </div>
        <div className={styles.halfContainer}>
          <BurgerConstructor data={ingredientsData} />
          <CreateOrder clickHandler={openModalHandler} />
        </div>
      </div>

      {isModalShown && (
        <Modal closeHandler={closeModalHandler} content={<OrderDetails />} />
      )}

      {isModalShown && selectedIngredient && (
        <Modal
          caption={"Детали инредиента"}
          closeHandler={closeModalHandler}
          content={<IngredientDetails data={selectedIngredient} />}
        />
      )}
    </div>
  );
}

export { App };
