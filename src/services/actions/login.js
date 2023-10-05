import { login } from "../../utils/api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const RESET_USER = "RESET_USER";

export function loginActionGen(form) {
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    login(form)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            email: res.user.email,
            name: res.user.name,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });
        } else {
          dispatch({ type: LOGIN_FAILED, message: res.message });
        }
      })
      .catch((err) => dispatch({ type: LOGIN_FAILED, message: err }));
  };
}
