import {
  BUNS_GROUP_NAME,
  SAUCES_GROUP_NAME,
  MAINS_GROUP_NAME,
} from "../../constants";
import { TTabsActions } from "../actions/tabs";
import {
  SELECT_BUNS_TAB,
  SELECT_MAINS_TAB,
  SELECT_SAUCES_TAB,
} from "../constants";

type TTabsState = {
  currentTab: string;
};

const tabsInitialState: TTabsState = {
  currentTab: "Булки",
};

const tabsReducer = (
  state = tabsInitialState,
  action: TTabsActions
): TTabsState => {
  switch (action.type) {
    case SELECT_BUNS_TAB:
      return { ...state, currentTab: BUNS_GROUP_NAME };
    case SELECT_SAUCES_TAB:
      return { ...state, currentTab: SAUCES_GROUP_NAME };
    case SELECT_MAINS_TAB:
      return { ...state, currentTab: MAINS_GROUP_NAME };
    default:
      return state;
  }
};

export { tabsReducer };
