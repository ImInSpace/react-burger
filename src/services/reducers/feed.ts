import { TOrder, TWsResponseBody } from "../../utils/api-shape";
import { TWsActions } from "../actions/web-socket";
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  SELECT_FEED,
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

export const feedReducer = (state = initialState, action: TWsActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return { ...state, isWsConnected: true, error: undefined };
    case WS_CONNECTION_CLOSED:
      return { ...state, isWsConnected: false, error: undefined };
    case WS_CONNECTION_ERROR:
      return { ...state, isWsConnected: false, error: action.payload };
    case WS_GET_MESSAGE: {
      return { ...state, message: action.message };
    }
    case SELECT_FEED: {
      console.log("Selected feed number: ", action.payload.number);
      return { ...state, selectedFeed: action.payload };
    }
    default:
      return state;
  }
};
