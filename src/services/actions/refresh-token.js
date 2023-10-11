import { updateToken } from "../../utils/api";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_SUCCESS";

export function refreshTokenActionGen(refreshToken) {
  return function (dispatch) {
    dispatch({ type: REFRESH_TOKEN_REQUEST });
    updateToken(refreshToken)
      .then((res) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
          payload: {
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          },
        });
      })
      .catch((err) => dispatch({ type: REFRESH_TOKEN_FAILED, message: err }));
  };
}
