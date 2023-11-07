import { TWsResponseBody } from "../../utils/api-shape";
import { TWsActions } from "../actions/web-socket";
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from "../constants";

type TWsState = {
  isWsConnected: boolean;
  message: TWsResponseBody | null;
  error?: Event;
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
    default:
      return state;
  }
};
