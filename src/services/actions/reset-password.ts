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
}

export interface IPasswordResetSuccessAction {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
  message: string;
}

export const passwordResetAction = (): IPasswordResetAction => ({
  type: PASSWORD_RESET_REQUEST,
});

export const passwordResetFailedAction = (): IPasswordResetFailedAction => ({
  type: PASSWORD_RESET_FAILED,
});

export const passwordResetSuccessAction = (
  message: string
): IPasswordResetSuccessAction => ({
  type: PASSWORD_RESET_SUCCESS,
  message: message,
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
        dispatch(passwordResetSuccessAction(res.message));
      })
      .catch((err) => dispatch(passwordResetFailedAction()));
  };
}

export type TResetPasswordActions =
  | IPasswordResetAction
  | IPasswordResetFailedAction
  | IPasswordResetSuccessAction;
