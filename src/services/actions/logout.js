import { loginRequest } from "../../utils/api";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function loginActionGen(form) {
  return function (dispatch) {
    dispatch({ type: LOGOUT_REQUEST });
    loginRequest(form)
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
