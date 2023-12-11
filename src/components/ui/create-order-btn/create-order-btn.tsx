import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order-btn.module.css";
import { Price } from "../../common/price/price";
import { createOrderThunk } from "../../../services/actions/order";
import { useNavigate } from "react-router-dom";
import {
  ICreateOrderRequestForm,
  IIngredientDataShape,
} from "../../../utils/api-shape";
import { useDispatch, useSelector } from "../../../services/types";

function CreateOrderBtn(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { constructorIngredients } = useSelector((store) => store.ingredients);

  const { bun, ingredients } = useSelector(
    (store) => store.ingredients.constructorIngredients
  );

  const { email } = useSelector((store) => store.auth);

  const createOrder = () => {
    if (!email) {
      navigate("/login", { state: { from: "/" } });
      return;
    }

    // Собираем идентификаторы ингредиентов в заказе.
    let ids: Array<string> = [];
    ids = [...ids, constructorIngredients.bun!._id];
    constructorIngredients.ingredients?.map((item: IIngredientDataShape) =>
      ids.push(item._id)
    );
    ids = [...ids, constructorIngredients.bun!._id];

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
    <div className={styles.container + " mt-5 mr-4"} data-cy="btn-create-order">
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
