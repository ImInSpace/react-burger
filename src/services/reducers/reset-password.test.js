import { resetPasswordReducer } from "./reset-password";
import * as Constants from "../constants";

describe("reset password reducer tests", () => {
  it("should return the initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual({
      request: false,
      success: false,
      message: "",
    });
  });

  it("should send reset password request (PASSWORD_RESET_REQUEST)", () => {
    expect(
      resetPasswordReducer(undefined, {
        type: Constants.PASSWORD_RESET_REQUEST,
      })
    ).toEqual({
      request: true,
      success: false,
      message: "",
    });
  });

  it("should failed password reset request (PASSWORD_RESET_FAILED)", () => {
    expect(
      resetPasswordReducer(
        {
          request: true,
          success: false,
          message: "",
        },
        {
          type: Constants.PASSWORD_RESET_FAILED,
          message: "failed reason",
        }
      )
    ).toEqual({
      request: false,
      success: false,
      message: "failed reason",
    });
  });

  it("Password reset success (PASSWORD_RESET_SUCCESS)", () => {
    expect(
      resetPasswordReducer(
        {
          request: true,
          success: false,
          message: "",
        },
        {
          type: Constants.PASSWORD_RESET_SUCCESS,
        }
      )
    ).toEqual({
      request: false,
      success: true,
      message: "",
    });
  });
});
