import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_SUCCESS,
} from "../actions/forgot-password";

const initialState = {
  request: false,
  success: false,
  error: false,

  message: "",
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
        message: action.message,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,
        message: action.message,
      };
    }
    default:
      return state;
  }
};

export { forgotPasswordReducer };
