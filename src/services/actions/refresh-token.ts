import { updateTokenRequest } from "../../utils/api";
import { IRefreshTokenRequest, ITokens } from "../../utils/api-shape";
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
  error: string;
}

export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
  readonly tokens: ITokens;
}

export const refreshTokenAction = (): IRefreshTokenAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenFailedAction = (
  msg: string
): IRefreshTokenFailedAction => ({
  type: REFRESH_TOKEN_FAILED,
  error: msg,
});

export const refreshTokenSuccessAction = (
  tokens: ITokens
): IRefreshTokenSuccessAction => ({
  type: REFRESH_TOKEN_SUCCESS,
  tokens: tokens,
});

export function refreshTokenActionGen(body: IRefreshTokenRequest) {
  // @ts-ignore
  return function (dispatch) {
    dispatch(refreshTokenAction());
    updateTokenRequest(body)
      .then((response) => {
        dispatch(refreshTokenSuccessAction(response));
      })
      .catch((err) => dispatch(refreshTokenFailedAction(err)));
  };
}

export type TRefreshTokenActions =
  | IRefreshTokenSuccessAction
  | IRefreshTokenAction
  | IRefreshTokenFailedAction;
