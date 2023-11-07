import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch, useDispatch } from "../types";
import { TWsActions, wsGetMessageAction } from "../actions/web-socket";
import { WS_CONNECTION_START } from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsActions) => {
      const { type } = action;
      const { dispatch } = store;

      if (type === WS_CONNECTION_START && !socket) {
        socket = new WebSocket(`${wsUrl}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          // console.log("Connection opened");
        };

        socket.onerror = (event) => {
          // console.log("Connection error");
        };

        socket.onmessage = (event) => {
          console.log("Get message()");
          const { data } = event;
          const message: TWsResponseBody = JSON.parse(data);
          dispatch(wsGetMessageAction(message));
        };

        socket.onclose = (event) => {
          // console.log("Connection close()");
        };
      }

      next(action);
    };
  }) as Middleware;
};
