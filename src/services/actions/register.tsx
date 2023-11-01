import { NavigateFunction } from "react-router-dom";
import { registerUser as registerUserRequest } from "../../utils/api";
import { IRegistrationRequestForm } from "../../utils/api-shape";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants";

export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
}

export const registerAction = (): IRegisterAction => ({
  type: REGISTER_REQUEST,
});

export const registerFailedAction = (): IRegisterFailedAction => ({
  type: REGISTER_FAILED,
});

export const registerSuccessAction = (): IRegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
});

export function registerThunk(
  registrationData: IRegistrationRequestForm,
  redirectHook: NavigateFunction
) {
  // @ts-ignore
  return function (dispatch) {
    dispatch(registerAction());
    registerUserRequest(registrationData)
      .then((res) => {
        redirectHook("/login");
        dispatch(registerSuccessAction());
      })
      .catch((err) => {
        dispatch(registerFailedAction());
      });
  };
}

export type TRegisterActions =
  | IRegisterAction
  | IRegisterFailedAction
  | IRegisterSuccessAction;
