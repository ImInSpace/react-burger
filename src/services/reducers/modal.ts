import { TModalActions } from "../actions/modal";
import { HIDE_MODAL, SHOW_MODAL } from "../constants";

type TModalState = {
  isShown: boolean;
};

const modalInitialState: TModalState = {
  isShown: false,
};

const modalReducer = (
  state = modalInitialState,
  action: TModalActions
): TModalState => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isShown: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShown: false,
      };
    default:
      return state;
  }
};

export { modalReducer };
