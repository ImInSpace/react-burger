import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  RESET_USER,
} from "../actions/get-user";

const initialState = {
  email: "",
  name: "",

  request: false,
  success: false,
  message: "",
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, request: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,

        email: action.email,
        name: action.name,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
        message: action.message,
      };
    }
    case RESET_USER: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export { getUserReducer };
