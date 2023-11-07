import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../common/price/price";
import { IngredientPrice } from "./ingredient-price/ingredient-price";
import styles from "./order-details.module.css";
import { useSelector } from "../../services/types";
import { EOrderStatus } from "../../utils/api-shape";
import { useParams } from "react-router-dom";
import { Loader } from "../ui/loader/loader";

function OrderDetails() {
  const { id } = useParams();

  const order = useSelector((store) =>
    store.feed.message?.orders.find((order) => order.number.toString() === id)
  );

  if (order === undefined) {
    return <Loader inverse={true} size="large" />;
  }

  let status: string = "Выполнен";

  switch (order!.status) {
    case EOrderStatus.created:
      status = "Создан";
      break;
    case EOrderStatus.pending:
      status = "Отменён";
      break;
    case EOrderStatus.done:
      status = "Выполнен";
      break;
    default:
      status = "Неизвестно";
      break;
  }

  return (
    <div className={styles.container}>
      <p className={"text text_type_digits-default " + styles.number}>
        {`#0${order!.number}`}
      </p>
      <p className="text text_type_main-medium mt-10">{order!.name}</p>
      <p className={"text text_type_main-small mt-10 " + styles.status}>
        {status}
      </p>
      <p className="text text_type_main-medium mt-15">Состав:</p>
      <div className={"mt-6 pr-6 custom-scroll " + styles.ingredients}>
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
      </div>
      <div className={"mt-10 mb-10 " + styles.footer}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order!.createdAt)} />
        </p>
        <div>
          <Price price={510} textSize="default" />
        </div>
      </div>
    </div>
  );
}

export { OrderDetails };
