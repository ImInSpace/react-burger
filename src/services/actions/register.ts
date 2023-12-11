import { NavigateFunction } from "react-router-dom";
import { registerUser as registerUserRequest } from "../../utils/api";
import { IRegistrationRequestForm } from "../../utils/api-shape";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants";
import { AppDispatch } from "../types";

export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
  message: string;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
}

export const registerAction = (): IRegisterAction => ({
  type: REGISTER_REQUEST,
});

export const registerFailedAction = (
  message: string
): IRegisterFailedAction => ({
  type: REGISTER_FAILED,
  message: message,
});

export const registerSuccessAction = (): IRegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
});

export function registerThunk(
  registrationData: IRegistrationRequestForm,
  redirectHook: NavigateFunction
) {
  return function (dispatch: AppDispatch) {
    dispatch(registerAction());
    registerUserRequest(registrationData)
      .then((res) => {
        redirectHook("/login");
        dispatch(registerSuccessAction());
      })
      .catch((err) => {
        dispatch(registerFailedAction(err));
      });
  };
}

export type TRegisterActions =
  | IRegisterAction
  | IRegisterFailedAction
  | IRegisterSuccessAction;
