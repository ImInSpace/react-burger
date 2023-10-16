import { NavigateFunction } from "react-router-dom";
import { registerUser } from "../../utils/api";
import { IRegistrationRequestForm } from "../../utils/api-shape";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function registerAction(
  registrationData: IRegistrationRequestForm,
  redirectHook: NavigateFunction
) {
  // @ts-ignore
  return function (dispatch) {
    dispatch({ type: REGISTER_REQUEST });

    registerUser(registrationData)
      .then((res) => {
        redirectHook("/login");
        dispatch({ type: REGISTER_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAILED, message: err });
      });
  };
}
