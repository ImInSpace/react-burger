import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../actions/logout";
import { setCookie } from "../cookieManager";

const initialState = {
  request: false,
  success: false,

  message: "",
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return { ...state, request: true };
    }
    case LOGOUT_SUCCESS: {
      setCookie("token", "");

      return {
        ...state,
        request: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        message: action.message,
      };
    }
    default:
      return state;
  }
};

export { logoutReducer };
