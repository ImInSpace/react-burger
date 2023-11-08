import { useEffect } from "react";
import { useDispatch, useSelector } from "../../../services/types";
import { wsOrdersConnectionStartAction } from "../../../services/actions/wsOrders";
import { WS_URL } from "../../../constants";
import { getCookie } from "../../../services/cookieManager";
import { Feed } from "../../feed/feed";
import { Loader } from "../loader/loader";
import { WS_ORDERS_CONNECTION_CLOSED } from "../../../services/constants";

// Обёртка для вывода Feed в профиле. Использует другое подключение Middleware.
function OrdersWrapper() {
  const dispatch = useDispatch();

  // Подключаемся к Web-Socket Middleware с токеном пользователя.
  useEffect(() => {
    dispatch(
      wsOrdersConnectionStartAction(
        WS_URL,
        getCookie("token")!.replace("Bearer ", "")
      )
    );

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
