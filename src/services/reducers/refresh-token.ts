import { TRefreshTokenActions } from "../actions/refresh-token";
import {
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from "../constants";
import { setCookie } from "../cookieManager";

type TRefreshTokenState = {
  request: boolean;
  success: boolean;
};

const initialState: TRefreshTokenState = {
  request: false,
  success: false,
};

const refreshTokenReducer = (
  state = initialState,
  action: TRefreshTokenActions
) => {
  switch (action.type) {
    case REFRESH_TOKEN_REQUEST: {
      return { ...state, request: true };
    }
    case REFRESH_TOKEN_SUCCESS: {
      setCookie("token", action.tokens.token);
      setCookie("refreshToken", action.tokens.refreshToken);
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
