import { registerUser } from "../../utils/api";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function registerAction(registrationData, redirectHook) {
  return function (dispatch) {
    dispatch({ type: REGISTER_REQUEST });

    registerUser(registrationData)
      .then((res) => {
        redirectHook("/login");
        dispatch({ type: REGISTER_SUCCESS, message: res.message });
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAILED, message: err });
      });
  };
}
