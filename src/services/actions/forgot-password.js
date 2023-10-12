import { forgotPasswordPOST } from "../../utils/api";

export const PASSWORD_FORGOT_REQUEST = "PASSWORD_FORGOT_REQUEST";
export const PASSWORD_FORGOT_SUCCESS = "PASSWORD_FORGOT_SUCCESS";
export const PASSWORD_FORGOT_FAILED = "PASSWORD_FORGOT_FAILED";

export function forgotPasswordAction(requestBody, redirectCallback) {
  return function (dispatch) {
    dispatch({ type: PASSWORD_FORGOT_REQUEST });
    forgotPasswordPOST(requestBody)
      .then((response) => {
        redirectCallback("/reset-password");
        dispatch({
          type: PASSWORD_FORGOT_SUCCESS,
          payload: response,
        });
      })
      .catch((err) => dispatch({ type: PASSWORD_FORGOT_FAILED, payload: err }));
  };
}
