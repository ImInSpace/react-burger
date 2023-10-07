import { SELECT_HEADER_MENU } from "../actions/header-menu";

import * as Constants from "../../constants";

const menuInitial = {
  selectedMenu: "",
};

export const headerMenuReducer = (state = menuInitial, action) => {
  switch (action.type) {
    case SELECT_HEADER_MENU: {
      if (action.payload.menu === Constants.HEADER_MENU_CONSTRUCTOR) {
        return { ...state, selectedMenu: Constants.HEADER_MENU_CONSTRUCTOR };
      }

      if (action.payload.menu === Constants.HEADER_MENU_ORDER_RIBBON) {
        return { ...state, selectedMenu: Constants.HEADER_MENU_CONSTRUCTOR };
      }

      if (action.payload.menu === Constants.HEADER_MENU_PROFILE) {
        return { ...state, selectedMenu: Constants.HEADER_MENU_CONSTRUCTOR };
      }

      break;
    }
    default:
      return { ...state };
  }
};
