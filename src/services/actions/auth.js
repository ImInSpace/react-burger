import { getUser, login, logout } from "../../utils/api";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const RESET_USER = "RESET_USER";

export function getUserActionGen(token) {
  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    getUser(token)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: {
              email: res.user.email,
              name: res.user.name,
            },
          });
        } else {
          dispatch({ type: GET_USER_FAILED });
        }
      })
      .catch((err) => dispatch({ type: GET_USER_FAILED, message: err }));
  };
}

export function loginActionGen(form) {
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    login(form)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              email: res.user.email,
              name: res.user.name,
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            },
          });
        } else {
          dispatch({ type: LOGIN_FAILED, message: res.message });
        }
      })
      .catch((err) => dispatch({ type: LOGIN_FAILED, message: err }));
  };
}

export function logoutActionGen(form) {
  return function (dispatch) {
    dispatch({ type: LOGOUT_REQUEST });
    logout(form)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
            payload: {
              success: res.success,
              message: res.message,
            },
          });
        } else {
          dispatch({ type: LOGOUT_FAILED, message: res.message });
        }
      })
      .catch((err) => dispatch({ type: LOGOUT_FAILED, message: err }));
  };
}