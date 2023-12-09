import { forgotPasswordReducer } from "./forgot-password";
import * as Constants from "../constants";

describe("forgot-password reducer tests", () => {
  it("should return the initial state", () => {
    const expectedState = {
      request: false,
      success: false,
      message: "",
    };

    expect(forgotPasswordReducer(undefined, {})).toEqual(expectedState);
  });

  it("should handle PASSWORD_FORGOT_REQUEST", () => {
    expect(
      forgotPasswordReducer(undefined, {
        type: Constants.PASSWORD_FORGOT_REQUEST,
      })
    ).toEqual({
      request: true,
      success: false,
      message: "",
    });
  });

  it("should handle PASSWORD_FORGOT_SUCCESS", () => {
    expect(
      forgotPasswordReducer(undefined, {
        type: Constants.PASSWORD_FORGOT_SUCCESS,
      })
    ).toEqual({
      request: false,
      success: true,
      message: "",
    });
  });

  it("should handle PASSWORD_FORGOT_FAILED", () => {
    expect(
      forgotPasswordReducer(undefined, {
        type: Constants.PASSWORD_FORGOT_FAILED,
        message: "reason error message",
      })
    ).toEqual({
      request: false,
      success: false,
      message: "reason error message",
    });
  });
});
