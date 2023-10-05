import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../actions/get-user";

const initialState = {
  email: "",
  name: "",

  request: false,
  success: false,
  message: "",
};

const loginReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export { loginReducer };
