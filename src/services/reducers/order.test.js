import { orderReducer } from "./order";
import * as Constants from "../constants";

describe("order reducer tests", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual({
      orderNumber: 0,

      orderRequest: false,
      orderRequestError: false,

      isModalShown: false,
    });
  });

  it("should send create order request and show modal (CREATE_ORDER_REQUEST)", () => {
    expect(
      orderReducer(undefined, { type: Constants.CREATE_ORDER_REQUEST })
    ).toEqual({
      orderNumber: 0,

      orderRequest: true,
      orderRequestError: false,
      isModalShown: true,
    });
  });

  it("create order failed (CREATE_ORDER_FAILED)", () => {
    expect(
      orderReducer(undefined, { type: Constants.CREATE_ORDER_FAILED })
    ).toEqual({
      orderNumber: 0,

      orderRequest: false,
      orderRequestError: true,
      isModalShown: false,
    });
  });

  it("should create order successfully (CREATE_ORDER_SUCCESS)", () => {
    expect(
      orderReducer(undefined, {
        type: Constants.CREATE_ORDER_SUCCESS,
        orderNumber: 999,
      })
    ).toEqual({
      orderNumber: 999,

      orderRequest: false,
      orderRequestError: false,
      isModalShown: false,
    });
  });

  it("should close order modal window (CLOSE_ORDER_MODAL)", () => {
    expect(
      orderReducer(
        {
          orderNumber: 999,

          orderRequest: false,
          orderRequestError: false,
          isModalShown: true,
        },
        {
          type: Constants.CLOSE_ORDER_MODAL,
        }
      )
    ).toEqual({
      orderNumber: 999,

      orderRequest: false,
      orderRequestError: false,
      isModalShown: false,
    });
  });
});
