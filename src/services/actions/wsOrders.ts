import { TOrder, TWsResponseBody } from "../../utils/api-shape";
import {
  WS_ORDERS_CONNECTION_START,
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_GET_MESSAGE,
  WS_ORDERS_SELECT,
} from "../constants";

export interface IWsOrdersConnectionStartAction {
  readonly type: typeof WS_ORDERS_CONNECTION_START;
}

export interface IWsOrdersConnectionSuccessAction {
  readonly type: typeof WS_ORDERS_CONNECTION_SUCCESS;
}

export interface IWsOrdersConnectionErrorAction {
  readonly type: typeof WS_ORDERS_CONNECTION_ERROR;
  payload: Event;
}

export interface IWsOrdersConnectionClosedAction {
  readonly type: typeof WS_ORDERS_CONNECTION_CLOSED;
}

export interface IWsOrdersGetMessageAction {
  readonly type: typeof WS_ORDERS_GET_MESSAGE;
  message: TWsResponseBody;
}

export interface IWsOrdersSelectAction {
  readonly type: typeof WS_ORDERS_SELECT;
  payload: TOrder;
}

export const wsOrdersConnectionStartAction =
  (): IWsOrdersConnectionStartAction => ({
    type: WS_ORDERS_CONNECTION_START,
  });

export const wsOrdersConnectionSuccessAction =
  (): IWsOrdersConnectionSuccessAction => ({
    type: WS_ORDERS_CONNECTION_SUCCESS,
  });

export const wsOrdersGetMessageAction = (
  message: TWsResponseBody
): IWsOrdersGetMessageAction => ({
  type: WS_ORDERS_GET_MESSAGE,
  message: message,
});

export const wsOrdersSelectOrdersAction = (
  selectedOrders: TOrder
): IWsOrdersSelectAction => ({
  type: WS_ORDERS_SELECT,
  payload: selectedOrders,
});

export type TWsOrdersActions =
  | IWsOrdersConnectionStartAction
  | IWsOrdersConnectionSuccessAction
  | IWsOrdersConnectionErrorAction
  | IWsOrdersConnectionClosedAction
  | IWsOrdersGetMessageAction
  | IWsOrdersSelectAction;
