import { createOrder } from "../../utils/api";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";

export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

export function createOrderAction(ids) {
  return function (dispatch) {
    dispatch({ type: CREATE_ORDER_REQUEST });
    createOrder(ids)
      .then((res) => {
        dispatch({ type: CREATE_ORDER_SUCCESS, number: res.order.number });
      })
      .catch((err) => {
        console.error("Ошибка при выполнении запроса: ", err);
        dispatch({ type: CREATE_ORDER_FAILED });
      });
  };
}
