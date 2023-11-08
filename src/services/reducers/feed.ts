import { TOrder, TWsResponseBody } from "../../utils/api-shape";
import { TWsFeedActions } from "../actions/wsFeed";
import {
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SELECT,
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

export const feedReducer = (state = initialState, action: TWsFeedActions) => {
  switch (action.type) {
    case WS_FEED_CONNECTION_SUCCESS:
      return { ...state, isWsConnected: true, error: undefined };
    case WS_FEED_CONNECTION_CLOSED:
      console.log("Подключение WS для ленты заказов закрыто.");
      return { ...state, isWsConnected: false, error: undefined };
    case WS_FEED_CONNECTION_ERROR:
      return { ...state, isWsConnected: false, error: action.payload };
    case WS_FEED_GET_MESSAGE: {
      return { ...state, message: action.message };
    }
    case WS_FEED_SELECT: {
      return { ...state, selectedFeed: action.payload };
    }
    default:
      return state;
  }
};
