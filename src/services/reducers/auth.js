import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  RESET_USER,
} from "../actions/auth";

import { getCookie, setCookie, deleteCookie } from "../cookieManager";

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
    case GET_USER_REQUEST: {
      return { ...state, request: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,

        email: action.payload.email,
        name: action.payload.name,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        message: action.message,
      };
    }
    case LOGOUT_REQUEST: {
      return { ...state, request: true };
    }
    case LOGOUT_SUCCESS: {
      deleteCookie("token");
      deleteCookie("refreshToken");

      return {
        ...state,
        request: false,
        success: true,

        message: action.payload.message,

        name: "",
        email: "",
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
    case RESET_USER: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export { authReducer };
