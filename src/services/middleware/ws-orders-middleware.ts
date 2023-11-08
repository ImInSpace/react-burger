import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import {
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_START,
} from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";
import {
  TWsOrdersActions,
  wsOrdersGetMessageAction,
} from "../actions/wsOrders";
import { wsFeedConnectionClosedAction } from "../actions/wsFeed";
import { WS_STATE_OPEN } from "../../constants";

export const ordersSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsOrdersActions) => {
      const { type } = action;
      const { dispatch } = store;

      // Создаем подключение с токеном пользователя.
      if (type === WS_ORDERS_CONNECTION_START) {
        socket = new WebSocket(
          `${action.payload.url}?token=${action.payload.token}`
        );
      }

      // Грохаем подключение.
      if (
        type === WS_ORDERS_CONNECTION_CLOSED &&
        socket?.readyState === WS_STATE_OPEN
      ) {
        socket?.close();
        wsFeedConnectionClosedAction();
      }

      if (socket) {
        socket.onopen = (event) => {
          // console.log("ws orders connection opened");
        };

        socket.onerror = (event) => {
          // console.log("ws orders connection error");
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const message: TWsResponseBody = JSON.parse(data);
          dispatch(wsOrdersGetMessageAction(message));
        };

        socket.onclose = (event) => {
          // console.log("ws orders on close");
          socket?.close();
        };
      }

      next(action);
    };
  }) as Middleware;
};
