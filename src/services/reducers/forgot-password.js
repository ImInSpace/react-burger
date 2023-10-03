import {
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_FAILED,
  PASSWORD_FORGOT_SUCCESS,
} from "../actions/forgot-password";

const initialState = {
  request: false,
  success: false,
  error: false,

  message: "",
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_FORGOT_REQUEST: {
      return { ...state, request: true };
    }
    case PASSWORD_FORGOT_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,
        message: action.message,
      };
    }
    case PASSWORD_FORGOT_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        message: action.message,
      };
    }
    default:
      return state;
  }
};

export { forgotPasswordReducer };