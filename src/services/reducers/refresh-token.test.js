import { refreshTokenReducer } from "./refresh-token";
import * as Constants from "../constants";

describe("refresh token reducer tests", () => {
  it("should return the initial state", () => {
    expect(refreshTokenReducer(undefined, {})).toEqual({
      request: false,
      success: false,
    });
  });

  it("should send request for token refresh (REFRESH_TOKEN_REQUEST)", () => {
    expect(
      refreshTokenReducer(undefined, { type: Constants.REFRESH_TOKEN_REQUEST })
    ).toEqual({
      request: true,
      success: false,
    });
  });

  it("should failed token refresh (REFRESH_TOKEN_FAILED)", () => {
    expect(
      refreshTokenReducer(
        { request: true, success: false },
        { type: Constants.REFRESH_TOKEN_FAILED }
      )
    ).toEqual({
      request: false,
      success: false,
    });
  });

  it("should receive token successfully (REFRESH_TOKEN_SUCCESS)", () => {
    const mockTokens = {
      refreshToken: "refreshToken",
      accessToken: "accessToken",
    };

    expect(
      refreshTokenReducer(undefined, {
        type: Constants.REFRESH_TOKEN_SUCCESS,
        tokens: mockTokens,
      })
    ).toEqual({
      request: false,
      success: true,
    });
  });
});
