import { wsOrdersReducer } from "./ws-orders";
import * as Constants from "../constants";

describe("ws-orders reducer tests", () => {
  it("should return the initial state", () => {
    expect(wsOrdersReducer(undefined, {})).toEqual({
      isWsConnected: false,
      message: null,
    });
  });

  it("ws connection success", () => {
    expect(
      wsOrdersReducer(undefined, {
        type: Constants.WS_ORDERS_CONNECTION_SUCCESS,
      })
    ).toEqual({
      isWsConnected: true,
      message: null,
    });
  });

  it("ws connection closed", () => {
    expect(
      wsOrdersReducer(undefined, {
        type: Constants.WS_ORDERS_CONNECTION_CLOSED,
      })
    ).toEqual({
      isWsConnected: false,
      message: null,
    });
  });

  it("ws connection error", () => {
    expect(
      wsOrdersReducer(undefined, {
        type: Constants.WS_ORDERS_CONNECTION_ERROR,
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
      wsOrdersReducer(
        { isWsConnected: true },
        {
          type: Constants.WS_ORDERS_GET_MESSAGE,
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
      wsOrdersReducer(
        { isWsConnected: true },
        {
          type: Constants.WS_ORDERS_SELECT,
          payload: expectedOrder,
        }
      )
    ).toEqual({
      isWsConnected: true,
      selectedFeed: expectedOrder,
    });
  });
});
