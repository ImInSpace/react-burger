import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order.module.css";
import { Price } from "../../common/price/price";
import { useSelector, useDispatch } from "react-redux";
import { createOrderAction } from "../../../services/actions/order";

function CreateOrder() {
  const dispatch = useDispatch();
  const { constructorIngredients } = useSelector((store) => store.ingredients);
  console.log("items: ", constructorIngredients);
  console.log(constructorIngredients.ingredients?.map((item) => item._id));

  const { bun, ingredients } = useSelector(
    (store) => store.ingredients.constructorIngredients
  );

  const createOrder = () => {
    const ids = constructorIngredients.ingredients?.map((item) => item._id);
    dispatch(createOrderAction(ids));
  };

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
          onClick={createOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

export { CreateOrder };
