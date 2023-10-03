import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/auth";

const initialState = {
  email: "",
  name: "",
  accessToken: "",
  refreshToken: "",

  request: false,
  success: false,
  message: "",
};

const authReducer = (state = initialState, action) => {
  console.log("authReducer state: ", state);
  console.log("authReducer action: ", action);

  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, request: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,

        email: action.email,
        name: action.name,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    }
    case LOGIN_FAILED: {
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

export { authReducer };
