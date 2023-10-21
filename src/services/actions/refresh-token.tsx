import { updateToken } from "../../utils/api";
import { IRefreshTokenRequest } from "../../utils/api-shape";

export const REFRESH_TOKEN_REQUEST: "REFRESH_TOKEN_REQUEST" =
  "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS" =
  "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED: "REFRESH_TOKEN_SUCCESS" =
  "REFRESH_TOKEN_SUCCESS";

export function refreshTokenActionGen(body: IRefreshTokenRequest) {
  // @ts-ignore
  return function (dispatch) {
    dispatch({ type: REFRESH_TOKEN_REQUEST });
    updateToken(body)
      .then((response) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
          payload: {
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          },
        });
      })
      .catch((err) => dispatch({ type: REFRESH_TOKEN_FAILED, message: err }));
  };
}
