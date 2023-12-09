import { tabsReducer } from "./tabs";
import {
  BUNS_GROUP_NAME,
  SAUCES_GROUP_NAME,
  MAINS_GROUP_NAME,
} from "../../constants";
import * as Constants from "../constants";

describe("tabs reducer tests", () => {
  it("should return the initial state", () => {
    expect(tabsReducer(undefined, {})).toEqual({
      currentTab: BUNS_GROUP_NAME,
    });
  });

  it("should select buns tab", () => {
    expect(tabsReducer(undefined, { type: Constants.SELECT_BUNS_TAB })).toEqual(
      {
        currentTab: BUNS_GROUP_NAME,
      }
    );
  });

  it("should select mains tab", () => {
    expect(
      tabsReducer(undefined, { type: Constants.SELECT_MAINS_TAB })
    ).toEqual({
      currentTab: MAINS_GROUP_NAME,
    });
  });

  it("should select sacuses tab", () => {
    expect(
      tabsReducer(undefined, { type: Constants.SELECT_SAUCES_TAB })
    ).toEqual({
      currentTab: SAUCES_GROUP_NAME,
    });
  });
});
