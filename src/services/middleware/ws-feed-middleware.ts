import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import {
  TWsFeedActions,
  wsFeedConnectionClosedAction,
  wsFeedConnectionErrorAction,
  wsFeedConnectionStartAction,
  wsFeedGetMessageAction,
} from "../actions/wsFeed";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
} from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";
import { WS_URL } from "../../constants";

export const feedSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsFeedActions) => {
      const { type } = action;
      const { dispatch } = store;

      if (type === WS_FEED_CONNECTION_START) {
        socket = new WebSocket(`${WS_URL}/all`);
      }

      if (type === WS_FEED_CONNECTION_CLOSED) {
        socket?.close();
      }

      if (socket) {
        socket.onopen = (event) => {
          wsFeedConnectionStartAction();
        };

        socket.onerror = (event) => {
          wsFeedConnectionErrorAction(event);
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const message: TWsResponseBody = JSON.parse(data);
          dispatch(wsFeedGetMessageAction(message));
        };

        socket.onclose = (event) => {
          wsFeedConnectionClosedAction();
        };
      }

      next(action);
    };
  }) as Middleware;
};
