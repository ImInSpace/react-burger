import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import {
  TWsFeedActions,
  wsFeedConnectionClosedAction,
  wsFeedGetMessageAction,
} from "../actions/wsFeed";
import { WS_FEED_CONNECTION_START } from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";

export const feedSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsFeedActions) => {
      const { type } = action;
      const { dispatch } = store;

      if (type === WS_FEED_CONNECTION_START && !socket) {
        socket = new WebSocket(`${action.url}`);
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
          dispatch(wsFeedGetMessageAction(message));
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
