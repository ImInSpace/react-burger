import { wsFeedReducer } from "./ws-feed";
import * as Constants from "../constants";

describe("ws-feed reducer tests", () => {
  it("should return the initial state", () => {
    expect(wsFeedReducer(undefined, {})).toEqual({
      isWsConnected: false,
      message: null,
    });
  });

  it("ws connection success", () => {
    expect(
      wsFeedReducer(undefined, { type: Constants.WS_FEED_CONNECTION_SUCCESS })
    ).toEqual({
      isWsConnected: true,
      message: null,
    });
  });

  it("ws connection closed", () => {
    expect(
      wsFeedReducer(undefined, { type: Constants.WS_FEED_CONNECTION_CLOSED })
    ).toEqual({
      isWsConnected: false,
      message: null,
    });
  });

  it("ws connection error", () => {
    expect(
      wsFeedReducer(undefined, {
        type: Constants.WS_FEED_CONNECTION_ERROR,
        payload: null,
      })
    ).toEqual({
      isWsConnected: false,
      message: null,
      error: null,
    });
  });

  it("ws handle message", () => {
    expect(
      wsFeedReducer(
        { isWsConnected: true },
        {
          type: Constants.WS_FEED_GET_MESSAGE,
          message: "message from server",
        }
      )
    ).toEqual({
      isWsConnected: true,
      message: "message from server",
    });
  });

  it("ws handle selected feed", () => {
    const expectedOrder = {
      ingredients: ["ingredient_a", "ingredient_b"],
      _id: "string",
      status: 1,
      number: 2,
      name: "name",
      createdAt: "created at",
      updatedAt: "updated at",
    };

    expect(
      wsFeedReducer(
        { isWsConnected: true },
        {
          type: Constants.WS_FEED_SELECT,
          payload: expectedOrder,
        }
      )
    ).toEqual({
      isWsConnected: true,
      selectedFeed: expectedOrder,
    });
  });
});
