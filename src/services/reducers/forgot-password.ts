import { TForgotPasswordActions } from "../actions/forgot-password";
import {
  PASSWORD_FORGOT_FAILED,
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_SUCCESS,
} from "../constants";

type TForgotPasswordState = {
  request: boolean;
  success: boolean;

  message: string;
};

const initialState: TForgotPasswordState = {
  request: false,
  success: false,
  message: "",
};

const forgotPasswordReducer = (
  state = initialState,
  action: TForgotPasswordActions
): TForgotPasswordState => {
  switch (action.type) {
    case PASSWORD_FORGOT_REQUEST: {
      return { ...state, request: true };
    }
    case PASSWORD_FORGOT_SUCCESS: {
      localStorage.setItem("forgot-password", "visited");

      return {
        ...state,
        request: false,
        success: true,
      };
    }
    case PASSWORD_FORGOT_FAILED: {
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

export { forgotPasswordReducer };
