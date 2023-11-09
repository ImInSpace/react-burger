import { useEffect } from "react";
import { useSelector } from "../../../services/types";
import { Feed } from "../../feed/feed";
import { Loader } from "../loader/loader";
import {
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_START,
} from "../../../services/constants";
import { useDispatch } from "react-redux";

// Обёртка для вывода Feed в профиле. Использует другое подключение Middleware.
function OrdersWrapper() {
  const dispatch = useDispatch();

  // Подключаемся к Web-Socket Middleware с токеном пользователя.
  useEffect(() => {
    dispatch({ type: WS_ORDERS_CONNECTION_START });

    // Отключаемся от сокета, когда уходим.
    return () => {
      dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  // Получаем данные по заказам текущего пользователя.
  const orders = useSelector((store) => store.wsOrders.message?.orders);

  // Если данные о заказах не загрузились - показываем загрузчик.
  if (orders === undefined) {
    return <Loader inverse={true} size="large" />;
  }

  // Выводим заказы на экран.
  return <Feed orders={orders!} />;
}

export { OrdersWrapper };
