import { TRegisterActions } from "../actions/register";
import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants";

type TRegisterState = {
  request: boolean;
  success: boolean;
  message: string;
};

const initialState: TRegisterState = {
  request: false,
  success: false,
  message: "",
};

const registerReducer = (
  state = initialState,
  action: TRegisterActions
): TRegisterState => {
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
      };
    }
    default:
      return state;
  }
};

export { registerReducer };
