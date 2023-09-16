import { createOrderPOST } from "../../utils/api";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";

export function createOrderAction(ids) {
  console.log("ACTION: ", ids);
  console.log("ACTION obj: ", { ids: ids });
  return function (dispatch) {
    dispatch({ type: CREATE_ORDER_REQUEST });
    createOrderPOST(ids)
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          console.log("response (create order): ", res);
          dispatch({ type: CREATE_ORDER_SUCCESS, number: res.order.number });
        } else {
          dispatch({ type: CREATE_ORDER_FAILED });
        }
      })
      .catch((err) => {
        console.error("Ошибка при выполнении запроса: ", err);
        dispatch({ type: CREATE_ORDER_FAILED });
      });
  };
}
