import { getUser } from "../../utils/api";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function loginActionGen(token) {
  return function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    getUser(token)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_USER_SUCCESS,

            email: res.user.email,
            name: res.user.name,
          });
        } else {
          dispatch({ type: GET_USER_FAILED });
        }
      })
      .catch((err) => dispatch({ type: GET_USER_FAILED, message: err }));
  };
}
