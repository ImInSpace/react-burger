import { authReducer } from "./auth";
import * as Constants from "../constants";
import { TAuth, TUser } from "../types/data";

describe("auth reducer tests", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(
      authReducer(undefined, {
        type: Constants.LOGIN_REQUEST,
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: false,

      loginRequest: true,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });

  it("should handle LOGIN_FAILED", () => {
    expect(
      authReducer(undefined, {
        type: Constants.LOGIN_FAILED,
        message: "failed reason message",
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: true,

      logoutRequest: false,
      logoutError: false,

      message: "failed reason message",
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    const fakeAuthResopnse: TAuth = {
      token: "token",
      refreshToken: "refreshToken",

      user: {
        email: "email",
        name: "name",
      },
    };

    expect(
      authReducer(undefined, {
        type: Constants.LOGIN_SUCCESS,
        auth: fakeAuthResopnse,
      })
    ).toEqual({
      email: "email",
      name: "name",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      authReducer(undefined, {
        type: Constants.GET_USER_REQUEST,
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: true,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(
      authReducer(undefined, {
        type: Constants.GET_USER_FAILED,
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: true,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    const userMock: TUser = {
      email: "email",
      name: "name",
    };

    expect(
      authReducer(undefined, {
        type: Constants.GET_USER_SUCCESS,
        user: userMock,
      })
    ).toEqual({
      email: "email",
      name: "name",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(
      authReducer(undefined, {
        type: Constants.LOGOUT_REQUEST,
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: true,
      logoutError: false,

      message: "",
    });
  });

  it("should handle LOGOUT_FAILED", () => {
    expect(
      authReducer(undefined, {
        type: Constants.LOGOUT_FAILED,
        message: "failed reason message",
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: true,

      message: "failed reason message",
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      authReducer(undefined, {
        type: Constants.LOGOUT_SUCCESS,
      })
    ).toEqual({
      email: "",
      name: "",

      getUserRequest: false,
      getUserError: false,

      loginRequest: false,
      loginError: false,

      logoutRequest: false,
      logoutError: false,

      message: "",
    });
  });
});
