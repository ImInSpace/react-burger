import {
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
} from "../actions/refresh-token";
import { setCookie } from "../cookieManager";

const initialState = {
  request: false,
  success: false,
};

const refreshTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_TOKEN_REQUEST: {
      return { ...state, request: true };
    }
    case REFRESH_TOKEN_SUCCESS: {
      setCookie("token", action.payload.accessToken);
      setCookie("refreshToken", action.payload.refreshToken);
      return { ...state, request: false, success: true };
    }
    case REFRESH_TOKEN_FAILED: {
      return { ...state, request: false, success: false };
    }
    default:
      return state;
  }
};

export { refreshTokenReducer };
