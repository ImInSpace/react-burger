import { GET_USER_DATA, RESET_USER_DATA } from "../actions/user";

const userInitial = {
  name: "",
  email: "",
};

const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case RESET_USER_DATA:
      return userInitial;
    default:
      return state;
  }
};

export { userReducer };
