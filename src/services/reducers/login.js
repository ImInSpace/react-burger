import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_USER,
} from "../actions/login";
import { setCookie } from "../cookieManager";

const initialState = {
  email: "",
  name: "",

  request: false,
  success: false,
  message: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, request: true };
    }
    case LOGIN_SUCCESS: {
      setCookie("token", action.payload.accessToken);
      setCookie("refreshToken", action.payload.refreshToken);

      return {
        ...state,
        request: false,
        success: true,

        email: action.payload.email,
        name: action.payload.name,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        request: false,
        success: false,
        message: action.message,
      };
    }
    case RESET_USER:
      return { ...initialState };
    default:
      return state;
  }
};

export { loginReducer };
