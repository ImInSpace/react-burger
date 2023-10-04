import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/auth";
import { setCookie, getCookie } from "../cookieManager";

const initialState = {
  email: "",
  name: "",

  request: false,
  success: false,
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, request: true };
    }
    case LOGIN_SUCCESS: {
      setCookie("token", action.accessToken);
      setCookie("refreshToken", action.refreshToken);

      return {
        ...state,
        request: false,
        success: true,

        email: action.email,
        name: action.name,
      };
    }
    case LOGIN_FAILED: {
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

export { authReducer };
