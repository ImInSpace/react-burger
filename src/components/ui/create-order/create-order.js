import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order.module.css";
import { Price } from "../../common/price/price";
import PropTypes from "prop-types";
import { BurgerConstructorContext } from "../../../context/burder-contstructor-context";
import { useContext } from "react";

function CreateOrder(props) {
  const { clickHandler } = props;
  const { selectedIngredients } = useContext(BurgerConstructorContext);
  const { ingredients, bun } = selectedIngredients;

  let sum = bun == null ? 0 : bun.price * 2;
  ingredients?.forEach((ingredient) => {
    sum += ingredient.price;
  });

  return (
    <>
      <div className={styles.container + " mt-5 mr-4"}>
        <div className="mr-5">
          <Price price={sum} textSize="medium" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={clickHandler}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

CreateOrder.propTypes = {
  clickHandler: PropTypes.func,
};

export { CreateOrder };
