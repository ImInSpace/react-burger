import { registerUserPOST } from "../../utils/api";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function registerAction(registrationData) {
  return function (dispatch) {
    dispatch({ type: REGISTER_REQUEST });

    registerUserPOST(registrationData)
      .then((res) => {
        if (res.success) {
          dispatch({ type: REGISTER_SUCCESS, message: res.message });
        } else {
          dispatch({ type: REGISTER_FAILED, message: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAILED, message: err });
      });
  };
}
