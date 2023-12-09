import { modalReducer } from "./modal";
import * as Constants from "../constants";

describe("modal reducer tests", () => {
  it("should return the initial state", () => {
    expect(modalReducer(undefined, {})).toEqual({
      isShown: false,
    });
  });

  it("should open modal", () => {
    expect(modalReducer(undefined, { type: Constants.SHOW_MODAL })).toEqual({
      isShown: true,
    });
  });

  it("should close modal", () => {
    expect(
      modalReducer({ isShown: true }, { type: Constants.HIDE_MODAL })
    ).toEqual({
      isShown: false,
    });
  });
});
