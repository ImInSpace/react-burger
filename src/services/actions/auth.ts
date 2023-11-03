import { getUser as getUserRequest, login, logout } from "../../utils/api";
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
import { AppDispatch, AppThunk } from "../types";
import { TAuth, TTokens, TUser } from "../types/data";

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
}

interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}

interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

// @ts-ignore
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

export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_FAILED,
});

export const loginSuccessAction = (authData: TAuth): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  auth: authData,
});

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_FAILED,
});

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
});

export function getUserThunk() {
  // @ts-ignore
  return function (dispatch) {
    dispatch(getUserAction());
    getUserRequest()
      .then((res) => {
        dispatch(getUserSuccessAction(res!.user));
      })
      .catch((err) => dispatch(getUserFailedAction()));
  };
}

export function loginThunk(loginForm: ILoginForm) {
  // @ts-ignore
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    login(loginForm)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            email: res.user.email,
            name: res.user.name,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          },
        });
      })
      .catch((err) => dispatch({ type: LOGIN_FAILED, message: err }));
  };
}

export function logoutThunk(logoutBody: ILogoutRequestBody) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGOUT_REQUEST });
    logout(logoutBody)
      .then((res) => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => dispatch({ type: LOGOUT_FAILED, message: err }));
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
