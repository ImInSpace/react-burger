import { NavigateFunction } from "react-router-dom";
import { resetPassword } from "../../utils/api";
import { IResetPasswordForm } from "../../utils/api-shape";
import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
} from "../constants";
import { AppDispatch } from "../types";

export interface IPasswordResetAction {
  readonly type: typeof PASSWORD_RESET_REQUEST;
}

export interface IPasswordResetFailedAction {
  readonly type: typeof PASSWORD_RESET_FAILED;
  message: string;
}

export interface IPasswordResetSuccessAction {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
}

export const passwordResetAction = (): IPasswordResetAction => ({
  type: PASSWORD_RESET_REQUEST,
});

export const passwordResetFailedAction = (
  message: string
): IPasswordResetFailedAction => ({
  type: PASSWORD_RESET_FAILED,
  message: message,
});

export const passwordResetSuccessAction = (): IPasswordResetSuccessAction => ({
  type: PASSWORD_RESET_SUCCESS,
});

export function resetPasswordThunk(
  resetPasswordForm: IResetPasswordForm,
  redirectHook: NavigateFunction
) {
  return function (dispatch: AppDispatch) {
    dispatch(passwordResetAction());
    resetPassword(resetPasswordForm)
      .then((res) => {
        redirectHook("/login");
        dispatch(passwordResetSuccessAction());
      })
      .catch((err) => dispatch(passwordResetFailedAction(err)));
  };
}

export type TResetPasswordActions =
  | IPasswordResetAction
  | IPasswordResetFailedAction
  | IPasswordResetSuccessAction;
