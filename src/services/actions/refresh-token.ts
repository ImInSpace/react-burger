import { updateTokenRequest as updateTokenRequest } from "../../utils/api";
import { IRefreshTokenRequest } from "../../utils/api-shape";
import {
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
} from "../constants";
import { TTokens } from "../types/data";

export interface IRefreshTokenAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
  readonly tokens: TTokens;
  readonly foo: string;
}

export const refreshTokenAction = (): IRefreshTokenAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenFailedAction = (): IRefreshTokenFailedAction => ({
  type: REFRESH_TOKEN_FAILED,
});

export const refreshTokenSuccessAction = (
  tokens: TTokens
): IRefreshTokenSuccessAction => ({
  type: REFRESH_TOKEN_SUCCESS,
  tokens: tokens,
  foo: "bar",
});

export function refreshTokenActionGen(body: IRefreshTokenRequest) {
  // @ts-ignore
  return function (dispatch) {
    dispatch(refreshTokenAction());
    updateTokenRequest(body)
      .then((response) => {
        dispatch(refreshTokenSuccessAction(response));
      })
      .catch((err) => dispatch({ type: REFRESH_TOKEN_FAILED, message: err }));
  };
}

export type TRefreshTokenActions =
  | IRefreshTokenSuccessAction
  | IRefreshTokenAction
  | IRefreshTokenFailedAction;
