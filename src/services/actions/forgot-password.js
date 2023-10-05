import { forgotPasswordPOST } from "../../utils/api";

export const PASSWORD_FORGOT_REQUEST = "PASSWORD_FORGOT_REQUEST";
export const PASSWORD_FORGOT_SUCCESS = "PASSWORD_FORGOT_SUCCESS";
export const PASSWORD_FORGOT_FAILED = "PASSWORD_FORGOT_FAILED";

export function forgotPasswordAction(email, redirectCallback) {
  return function (dispatch) {
    dispatch({ type: PASSWORD_FORGOT_REQUEST });
    forgotPasswordPOST(email)
      .then((res) => {
        redirectCallback("/reset-password");

        if (res.success) {
          dispatch({
            type: PASSWORD_FORGOT_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: PASSWORD_FORGOT_FAILED,
            payload: res,
          });
        }
      })
      .catch((err) => dispatch({ type: PASSWORD_FORGOT_FAILED }));
  };
}
