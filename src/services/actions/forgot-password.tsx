import { NavigateFunction } from "react-router-dom";
import { forgotPasswordPOST as forgotPasswordRequest } from "../../utils/api";
import { IForgotPasswordRequestBody } from "../../utils/api-shape";
import {
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_FAILED,
  PASSWORD_FORGOT_SUCCESS,
} from "../constants";

export interface IForgotPassword {
  readonly type: typeof PASSWORD_FORGOT_REQUEST;
}

export interface IForgotPasswordFailed {
  readonly type: typeof PASSWORD_FORGOT_FAILED;
}

export interface IForgotPasswordSuccess {
  readonly type: typeof PASSWORD_FORGOT_SUCCESS;
  message: string;
}

export const forgotPasswordAction = (): IForgotPassword => ({
  type: PASSWORD_FORGOT_REQUEST,
});

export const forgotPasswordFailed = (): IForgotPasswordFailed => ({
  type: PASSWORD_FORGOT_FAILED,
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
  // @ts-ignore
  return function (dispatch) {
    dispatch(forgotPasswordAction());
    forgotPasswordRequest(requestBody)
      .then((response) => {
        redirectCallback("/reset-password");
        dispatch(forgotPasswordSuccess(response.message));
      })
      .catch((err) => dispatch({ type: PASSWORD_FORGOT_FAILED, payload: err }));
  };
}

export type TForgotPasswordActions =
  | IForgotPassword
  | IForgotPasswordFailed
  | IForgotPasswordSuccess;
