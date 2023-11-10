import { NavigateFunction } from "react-router-dom";
import { forgotPasswordPOST as forgotPasswordRequest } from "../../utils/api";
import { IForgotPasswordRequestBody } from "../../utils/api-shape";
import {
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_FAILED,
  PASSWORD_FORGOT_SUCCESS,
} from "../constants";
import { AppDispatch } from "../types";

export interface IForgotPassword {
  readonly type: typeof PASSWORD_FORGOT_REQUEST;
}

export interface IForgotPasswordFailed {
  readonly type: typeof PASSWORD_FORGOT_FAILED;
  message: string;
}

export interface IForgotPasswordSuccess {
  readonly type: typeof PASSWORD_FORGOT_SUCCESS;
  message: string;
}

export const forgotPasswordAction = (): IForgotPassword => ({
  type: PASSWORD_FORGOT_REQUEST,
});

export const forgotPasswordFailedAction = (
  error: string
): IForgotPasswordFailed => ({
  type: PASSWORD_FORGOT_FAILED,
  message : error,
});

export const forgotPasswordSuccess = (
  message: string
): IForgotPasswordSuccess => ({
  type: PASSWORD_FORGOT_SUCCESS,
  message: message,
});

export function forgotPasswordThunk(
  requestBody: IForgotPasswordRequestBody,
  redirectCallback: NavigateFunction
) {
  return function (dispatch: AppDispatch) {
    dispatch(forgotPasswordAction());
    forgotPasswordRequest(requestBody)
      .then((response) => {
        redirectCallback("/reset-password");
        dispatch(forgotPasswordSuccess(response.message));
      })
      .catch((err) => dispatch(forgotPasswordFailedAction(err)));
  };
}

export type TForgotPasswordActions =
  | IForgotPassword
  | IForgotPasswordFailed
  | IForgotPasswordSuccess;
