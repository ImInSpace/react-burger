import { TResetPasswordActions } from "../actions/reset-password";
import {
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
} from "../constants";

type TResetPasswordState = {
  request: boolean;
  success: boolean;
  message: string;
};

const initialState: TResetPasswordState = {
  request: false,
  success: false,
  message: "",
};

const resetPasswordReducer = (
  state = initialState,
  action: TResetPasswordActions
): TResetPasswordState => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST: {
      return { ...state, request: true };
    }
    case PASSWORD_RESET_SUCCESS: {
      //localStorage.removeItem("forgot-password", "visited");
      //localStorage.removeItem("forgot-password", "visited");
      localStorage.removeItem("visited");

      return {
        ...state,
        request: false,
        success: true,
      };
    }
    case PASSWORD_RESET_FAILED: {
      return {
        ...state,
        request: false,
        success: false,
        message: action.message,
      };
    }
    default:
      return state;
  }
};

export { resetPasswordReducer };
