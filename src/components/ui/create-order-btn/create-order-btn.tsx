import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order-btn.module.css";
import { Price } from "../../common/price/price";
import { useSelector, useDispatch } from "react-redux";
import { createOrderThunk } from "../../../services/actions/order";
import { useNavigate } from "react-router-dom";
import {
  ICreateOrderRequestForm,
  IIngredientDataShape,
} from "../../../utils/api-shape";

function CreateOrderBtn(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // @ts-ignore
  const { constructorIngredients } = useSelector((store) => store.ingredients);

  const { bun, ingredients } = useSelector(
    // @ts-ignore
    (store) => store.ingredients.constructorIngredients
  );

  // @ts-ignore
  const { email } = useSelector((store) => store.auth);

  const createOrder = () => {
    if (!email) {
      navigate("/login", { state: { from: "/" } });
      return;
    }

    const ids = constructorIngredients.ingredients?.map(
      (item: IIngredientDataShape) => item._id
    );

    const createOrderForm: ICreateOrderRequestForm = {
      ingredients: ids,
    };

    // @ts-ignore
    dispatch(createOrderThunk(createOrderForm));
  };

  let sum = bun == null ? 0 : bun.price * 2;
  ingredients?.forEach((ingredient: IIngredientDataShape) => {
    sum += ingredient.price;
  });

  return (
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
  );
}

export { CreateOrderBtn };
