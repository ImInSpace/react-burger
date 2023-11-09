import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "../common/price/price";
import { CompoundRow } from "./compound-row/compound-row";
import styles from "./order-details.module.css";
import { useDispatch, useSelector } from "../../services/types";
import { EOrderStatus, TOrder } from "../../utils/api-shape";
import { useLocation, useParams } from "react-router-dom";
import { Loader } from "../ui/loader/loader";
import { OrderNumber } from "../create-order/order-number/order-number";
import { useEffect } from "react";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_START,
} from "../../services/constants";

// Элемент заказа.
type TCompoundItem = {
  name: string;
  quantity: number;
  price: number;
  image: string;
};

function OrderDetails() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_FEED_CONNECTION_START });

    return () => {
      dispatch({ type: WS_FEED_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch({ type: WS_ORDERS_CONNECTION_START });

  //   return () => {
  //     dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
  //   };
  // }, [dispatch]);

  const allIngredients = useSelector((store) => store.ingredients.ingredients);

  const feedOrders = useSelector((store) => {
    return store.wsFeedReducer.message?.orders;
  });
  console.log("feed orders: ", feedOrders);

  const userOrders = useSelector((store) => {
    return store.wsOrders.message?.orders;
  });
  console.log("user orders: ", userOrders);

  let order: TOrder | null = null;

  if (location.pathname.includes("orders")) {
    order = userOrders!.find((order) => order.number.toString() === id)!;
  } else {
    order = feedOrders!.find((order) => order.number.toString() === id)!;
  }

  // const order = useSelector((store) =>
  //   store.wsFeedReducer.message?.orders.find(
  //     (order) => order.number.toString() === id
  //   )
  // );

  // Получаем список ингредиентов в заказе для вывода.
  let ingredientsInOrder: Array<TCompoundItem> = [];
  order?.ingredients.forEach((ingredientInOrder) => {
    const tmp = allIngredients.find(
      (ingredient) => ingredient._id === ingredientInOrder
    )!;

    if (ingredientsInOrder.some((x) => x.name === tmp.name)) {
      ingredientsInOrder.map((x) => {
        if (x.name === tmp.name) {
          x.quantity++;
        }
        return x;
      });
      return;
    }

    ingredientsInOrder = [
      ...ingredientsInOrder,
      {
        name: tmp.name,
        price: tmp.price,
        image: tmp.image_mobile,
        quantity: allIngredients.filter((x) => x._id === ingredientInOrder)
          .length,
      },
    ];
  });

  // Заказ не загрузился? Показываемся Loader.
  if (order === undefined) {
    return <Loader inverse={true} size="large" />;
  }

  let status: string = "";

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
        {ingredientsInOrder.map((ingredient, index) => {
          return (
            <CompoundRow
              icon={ingredient!.image}
              ingredientName={ingredient!.name}
              price={ingredient!.price}
              quantity={ingredient.quantity}
              key={order!.number + index}
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
              (prev, current) => prev + current.price * current.quantity,
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
