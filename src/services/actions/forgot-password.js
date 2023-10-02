import { forgotPasswordPOST } from "../../utils/api";

export const PASSWORD_FORGOT_REQUEST = "PASSWORD_FORGOT_REQUEST";
export const PASSWORD_FORGOT_SUCCESS = "PASSWORD_FORGOT_SUCCESS";
export const PASSWORD_FORGOT_FAILED = "PASSWORD_FORGOT_FAILED";

export function forgotPasswordAction(email) {
  return function (dispatch) {
    dispatch({ type: PASSWORD_FORGOT_REQUEST });
    forgotPasswordPOST(email)
      .then((res) => {
        if (res.success) {
          dispatch({ type: PASSWORD_FORGOT_SUCCESS, message: res.message });
        } else {
          dispatch({ type: PASSWORD_FORGOT_FAILED, message: res.message });
        }
      })
      .catch((err) => dispatch({ type: PASSWORD_FORGOT_FAILED, message: err }));
  };
}
