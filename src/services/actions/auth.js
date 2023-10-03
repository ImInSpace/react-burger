import { loginRequest } from "../../utils/api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function authAction(form) {
  console.log("authAction form: ", form);
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    loginRequest(form)
      .then((res) => {
        console.log("authAction: ", res);
        if (res.success) {
          console.log("success: ", res.success);
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
