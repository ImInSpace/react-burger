import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_SUCCESS,
} from "../actions/forgot-password";

const initialState = {
  email: "",

  request: false,
  success: false,
  error: false,

  msg: "",
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST: {
      return { ...state, request: true };
    }
    case PASSWORD_RESET_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        msg: action.message,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        success: true,
        msg: action.message,
      };
    }
    default:
      return state;
  }
};

export { forgotPasswordReducer as resetPasswordReducer };
