import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import {
  TWsOrdersActions,
  wsOrdersConnectionCloseAction,
  wsOrdersConnectionErrorAction,
  wsOrdersConnectionSuccessAction,
  wsOrdersGetMessageAction,
} from "../actions/wsOrders";
import {
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_START,
} from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";
import { WS_STATE_CLOSED, WS_URL } from "../../constants";
import { getCookie } from "../cookieManager";

export const wsOrdersMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsOrdersActions) => {
      const { type } = action;
      const { dispatch } = store;

      if (type === WS_ORDERS_CONNECTION_START) {
        if (socket === null || socket.readyState === WS_STATE_CLOSED)
          socket = new WebSocket(
            `${WS_URL}?token=${getCookie("token")?.replace("Bearer ", "")}`
          );
      }

      if (type === WS_ORDERS_CONNECTION_CLOSED) {
        socket?.close();
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch(wsOrdersConnectionSuccessAction());
        };

        socket.onerror = (event) => {
          dispatch(wsOrdersConnectionErrorAction(event));
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const message: TWsResponseBody = JSON.parse(data);
          dispatch(wsOrdersGetMessageAction(message));
        };

        socket.onclose = (event) => {
          dispatch(wsOrdersConnectionCloseAction());
        };
      }

      next(action);
    };
  }) as Middleware;
};
