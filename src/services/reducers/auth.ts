import { TAuthActions } from "../actions/auth";
import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../constants";

import { setCookie, deleteCookie } from "../cookieManager";

type TAuthState = {
  email: string;
  name: string;

  getUserRequest: boolean;
  getUserError: boolean;

  loginRequest: boolean;
  loginError: boolean;

  logoutRequest: boolean;
  logoutError: boolean;

  message: string;
};

const initialState: TAuthState = {
  email: "",
  name: "",

  getUserRequest: false,
  getUserError: false,

  loginRequest: false,
  loginError: false,

  logoutRequest: false,
  logoutError: false,

  message: "",
};

const authReducer = (
  state = initialState,
  action: TAuthActions
): TAuthState => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loginRequest: true };
    }
    case LOGIN_SUCCESS: {
      setCookie("token", action.auth.token);
      setCookie("refreshToken", action.auth.refreshToken);

      return {
        ...state,
        loginRequest: false,
        loginError: false,

        email: action.auth.user.email,
        name: action.auth.user.name,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginError: true,
        message: action.message,
      };
    }
    case GET_USER_REQUEST: {
      return { ...state, getUserRequest: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserError: false,

        email: action.user.email,
        name: action.user.name,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserError: true,
      };
    }
    case LOGOUT_REQUEST: {
      return { ...state, logoutRequest: true, logoutError: false };
    }
    case LOGOUT_SUCCESS: {
      deleteCookie("token");
      deleteCookie("refreshToken");

      return {
        ...state,

        logoutRequest: false,
        logoutError: false,

        name: "",
        email: "",
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutError: true,
        message: action.message,
      };
    }
    default:
      return state;
  }
};

export { authReducer };
