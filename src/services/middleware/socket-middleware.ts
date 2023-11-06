import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import { TWsActions } from "../actions/web-socket";
import { WS_CONNECTION_START } from "../constants";

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsActions) => {
      const { type } = action;

      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(`${wsUrl}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          console.log("socket.onOpen()");
          // wsConnectionStartAction();
          // dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          // dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          console.log("received message: ", JSON.parse(data));
        };

        socket.onclose = (event) => {
          // dispatch({ type: onClose, payload: event });
        };

        // if (type === wsSendMessage) {
        // const payload = action.payload;
        // const message = { ...(payload as IMessage), token: user?.token };
        // socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  }) as Middleware;
};
