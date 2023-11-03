import { createOrder } from "../../utils/api";
import { ICreateOrderRequestForm } from "../../utils/api-shape";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  CLOSE_ORDER_MODAL,
} from "../constants";
import { AppDispatch } from "../types";

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

export interface ICloseOrderModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export const closeOrderModalAction = (): ICloseOrderModal => ({
  type: CLOSE_ORDER_MODAL,
});

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
  return function (dispatch: AppDispatch) {
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

export type TOrderActions =
  | ICreateOrderAction
  | ICreateOrderFailedAction
  | ICreateOrderSuccessAction
  | ICloseOrderModal;
