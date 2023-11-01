import { NavigateFunction } from "react-router-dom";
import { resetPassword } from "../../utils/api";
import { IResetPasswordForm } from "../../utils/api-shape";
import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
} from "../constants";

export interface IPasswordReset {
  readonly type: typeof PASSWORD_RESET_REQUEST;
}

export interface IPasswordResetFailed {
  readonly type: typeof PASSWORD_RESET_FAILED;
}

export interface IPasswordResetSuccess {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
  message: string;
}

export const passwordResetAction = (): IPasswordReset => ({
  type: PASSWORD_RESET_REQUEST,
});

export const passwordResetFailedAction = (): IPasswordResetFailed => ({
  type: PASSWORD_RESET_FAILED,
});

export const passwordResetSuccessAction = (
  message: string
): IPasswordResetSuccess => ({
  type: PASSWORD_RESET_SUCCESS,
  message: message,
});

export function resetPasswordThunk(
  resetPasswordForm: IResetPasswordForm,
  redirectHook: NavigateFunction
) {
  // @ts-ignore
  return function (dispatch) {
    dispatch(passwordResetAction());
    resetPassword(resetPasswordForm)
      .then((res) => {
        redirectHook("/login");
        dispatch(passwordResetSuccessAction(res.message));
      })
      .catch((err) => dispatch(passwordResetFailedAction()));
  };
}
