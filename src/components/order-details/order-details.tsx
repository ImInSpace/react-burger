import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../common/price/price";
import { IngredientPrice } from "./ingredient-price/ingredient-price";
import styles from "./order-details.module.css";
import { useSelector } from "../../services/types";
import { EOrderStatus } from "../../utils/api-shape";
import { useParams } from "react-router-dom";
import { Loader } from "../ui/loader/loader";
import { TIngredient } from "../../services/types/data";
import { v4 as uuid } from "uuid";

function OrderDetails() {
  const { id } = useParams();

  const order = useSelector((store) =>
    store.feed.message?.orders.find((order) => order.number.toString() === id)
  );

  const allIngredients = useSelector((store) => store.ingredients.ingredients);
  let ingredientsInOrder: Array<TIngredient> = [];

  order?.ingredients.forEach((ingredientInOrder) => {
    ingredientsInOrder = [
      ...ingredientsInOrder,
      allIngredients.find((ing) => ing._id === ingredientInOrder)!,
    ];
  });

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
        {ingredientsInOrder.map((ingredient) => {
          return (
            <IngredientPrice
              icon={ingredient!.image}
              ingredientName={ingredient!.name}
              price={ingredient!.price}
              quantity={
                ingredientsInOrder.filter((x) => x._id === ingredient._id)
                  .length
              }
              key={uuid()}
            />
          );
        })}
      </div>
      <div className={"mt-10 mb-10 " + styles.footer}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order!.createdAt)} />
        </p>
        <div>
          <Price
            price={ingredientsInOrder.reduce(
              (prev, current) => prev + current.price,
              0
            )}
            textSize="default"
          />
        </div>
      </div>
    </div>
  );
}

export { OrderDetails };
