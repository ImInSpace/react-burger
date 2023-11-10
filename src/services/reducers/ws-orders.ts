import { TOrder, TWsResponseBody } from "../../utils/api-shape";
import { TWsOrdersActions } from "../actions/wsOrders";
import {
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_GET_MESSAGE,
  WS_ORDERS_SELECT,
} from "../constants";

type TWsState = {
  isWsConnected: boolean;
  message: TWsResponseBody | null;
  error?: Event;
  selectedFeed?: TOrder;
};

const initialState: TWsState = {
  isWsConnected: false,
  message: null,
};

export const wsOrdersReducer = (
  state = initialState,
  action: TWsOrdersActions
) => {
  switch (action.type) {
    case WS_ORDERS_CONNECTION_SUCCESS:
      return { ...state, isWsConnected: true, error: undefined };
    case WS_ORDERS_CONNECTION_CLOSED:
      return { ...state, isWsConnected: false, error: undefined };
    case WS_ORDERS_CONNECTION_ERROR:
      return { ...state, isWsConnected: false, error: action.payload };
    case WS_ORDERS_GET_MESSAGE: {
      return { ...state, message: action.message };
    }
    case WS_ORDERS_SELECT: {
      return { ...state, selectedFeed: action.payload };
    }
    default:
      return state;
  }
};
