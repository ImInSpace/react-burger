import { createOrder } from "../../utils/api";
import { ICreateOrderRequestForm } from "../../utils/api-shape";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "../constants";

export interface ICreateOrderAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED;
}

export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  orderNumber: number;
}

export const createOrderAction = (): ICreateOrderAction => ({
  type: CREATE_ORDER_REQUEST,
});

export const createOrderFailedAction = (): ICreateOrderFailedAction => ({
  type: CREATE_ORDER_FAILED,
});

export const createOrderSuccessAction = (
  orderNumber: number
): ICreateOrderSuccessAction => ({
  type: CREATE_ORDER_SUCCESS,
  orderNumber: orderNumber,
});

export function createOrderThunk(orderForm: ICreateOrderRequestForm) {
  // @ts-ignore
  return function (dispatch) {
    dispatch(createOrderAction());
    createOrder(orderForm)
      .then((response) =>
        dispatch(createOrderSuccessAction(response.order.number))
      )
      .catch((err) => {
        console.error("Ошибка при выполнении запроса: ", err);
        dispatch(createOrderFailedAction());
      });
  };
}
