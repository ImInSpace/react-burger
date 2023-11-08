import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import {
  WS_FEED_CONNECTION_START,
  WS_ORDERS_CONNECTION_START,
} from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";
import {
  TWsOrdersActions,
  wsOrdersGetMessageAction,
} from "../actions/wsOrders";

export const feedSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsOrdersActions) => {
      const { type } = action;
      const { dispatch } = store;

      if (type === WS_ORDERS_CONNECTION_START && !socket) {
        socket = new WebSocket(
          `${action.payload.url}?token=${action.payload.token}`
        );
      }

      // if (type === WS_FEED_CONNECTION_CLOSED) {
      //   socket?.close();
      //   wsFeedConnectionClosedAction();
      // }

      if (socket) {
        socket.onopen = (event) => {
          // console.log("ws feed connection opened");
        };

        socket.onerror = (event) => {
          // console.log("ws feed connection error");
        };

        socket.onmessage = (event) => {
          // console.log("Get message()");
          const { data } = event;
          const message: TWsResponseBody = JSON.parse(data);
          dispatch(wsOrdersGetMessageAction(message));
        };

        socket.onclose = (event) => {
          console.log("on close middleware");
          socket?.close();
        };
      }

      next(action);
    };
  }) as Middleware;
};
