import { NavigateFunction } from "react-router-dom";
import {
  getUser as getUserRequest,
  login as loginRequest,
  logout,
} from "../../utils/api";
import { ILoginForm, ILogoutRequestBody } from "../../utils/api-shape";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../constants";
import { AppDispatch } from "../types";
import { TAuth, TUser } from "../types/data";

interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}

interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}

interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

interface ILoginAction {
  readonly type: typeof LOGIN_REQUEST;
}

interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly auth: TAuth & { user: TUser };
}

interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
  message: string;
}

interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}

interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
  message: string;
}

export const getUserAction = (): IGetUserAction => ({ type: GET_USER_REQUEST });

export const getUserFailedAction = (): IGetUserFailedAction => ({
  type: GET_USER_FAILED,
});

export const getUserSuccessAction = (user: TUser): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user: user,
});

export const loginAction = (): ILoginAction => ({
  type: LOGIN_REQUEST,
});

export const loginFailedAction = (message: string): ILoginFailedAction => ({
  type: LOGIN_FAILED,
  message: message,
});

export const loginSuccessAction = (authData: TAuth): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  auth: authData,
});

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutFailedAction = (message: string): ILogoutFailedAction => ({
  type: LOGOUT_FAILED,
  message: message,
});

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
});

export function getUserThunk() {
  return function (dispatch: AppDispatch) {
    dispatch(getUserAction());
    getUserRequest()
      .then((res) => {
        dispatch(getUserSuccessAction(res!.user));
      })
      .catch((err) => dispatch(getUserFailedAction()));
  };
}

export function loginThunk(
  loginForm: ILoginForm,
  navigateHook: NavigateFunction
) {
  return function (dispatch: AppDispatch) {
    dispatch(loginAction());
    loginRequest(loginForm)
      .then((res) => {
        dispatch(
          loginSuccessAction({
            token: res.accessToken,
            refreshToken: res.refreshToken,
            user: { name: res.user.name, email: res.user.email },
          })
        );
      })
      .catch((err) => dispatch(loginFailedAction(err)));
  };
}

export function logoutThunk(logoutBody: ILogoutRequestBody) {
  return function (dispatch: AppDispatch) {
    dispatch(logoutAction());
    logout(logoutBody)
      .then((res) => {
        dispatch(logoutSuccessAction());
      })
      .catch((err) => dispatch(logoutFailedAction(err)));
  };
}

export type TAuthActions =
  | IGetUserAction
  | IGetUserFailedAction
  | IGetUserSuccessAction
  | ILoginAction
  | ILoginFailedAction
  | ILoginSuccessAction
  | ILogoutAction
  | ILogoutFailedAction
  | ILogoutSuccessAction;
