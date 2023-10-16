import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../actions/register";

const initialState = {
  request: false,
  success: false,
  message: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return { ...state, request: true };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,
      };
    }
    case REGISTER_FAILED: {
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

export { registerReducer };
