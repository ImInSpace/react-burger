import { resetPassword } from "../../utils/api";

export const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED = "PASSWORD_RESET_FAILED";

export function resetPasswordAction(resetPasswordForm, redirectHook) {
  return function (dispatch) {
    dispatch({ type: PASSWORD_RESET_REQUEST });
    resetPassword(resetPasswordForm)
      .then((res) => {
        redirectHook("/login");
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          payload: { message: res.message },
        });
      })
      .catch((err) =>
        dispatch({ type: PASSWORD_RESET_FAILED, payload: { message: err } })
      );
  };
}
