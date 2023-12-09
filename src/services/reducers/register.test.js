import { registerReducer } from "./register";
import * as Constants from "../constants";

describe("register reducer tests", () => {
  it("should return the initial state", () => {
    expect(registerReducer(undefined, {})).toEqual({
      request: false,
      success: false,
      message: "",
    });
  });

  it("should send register request (REGISTER_REQUEST)", () => {
    expect(
      registerReducer(undefined, { type: Constants.REGISTER_REQUEST })
    ).toEqual({
      request: true,
      success: false,
      message: "",
    });
  });

  it("register request should failed (REGISTER_FAILED)", () => {
    expect(
      registerReducer(
        {
          request: true,
          success: false,
          message: "",
        },
        { type: Constants.REGISTER_FAILED, message: "register failed reason" }
      )
    ).toEqual({
      request: false,
      success: false,
      message: "register failed reason",
    });
  });

  it("register success (REGISTER_SUCCESS)", () => {
    expect(
      registerReducer(
        {
          request: true,
          success: false,
          message: "",
        },
        { type: Constants.REGISTER_SUCCESS }
      )
    ).toEqual({
      request: false,
      success: true,
      message: "",
    });
  });
});
