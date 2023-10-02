import { resetPasswordPOST } from "../../utils/api";

export const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED = "PASSWORD_RESET_FAILED";

export function resetPasswordAction(password, token) {
  return function (dispatch) {
    dispatch({ type: PASSWORD_RESET_REQUEST });
    resetPasswordPOST(password, token)
      .then((res) => {
        if (res.success) {
          dispatch({ type: PASSWORD_RESET_SUCCESS, message: res.message });
        } else {
          dispatch({ type: PASSWORD_RESET_FAILED, message: res.message });
        }
      })
      .catch((err) => dispatch({ type: PASSWORD_RESET_FAILED, message: err }));
  };
}
