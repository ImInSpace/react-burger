import type { Middleware, MiddlewareAPI } from "redux";

import type { TAppActions } from "../actions";
import { AppDispatch } from "../types";
import {
  TWsFeedActions,
  wsFeedConnectionStartAction,
  wsFeedGetMessageAction,
} from "../actions/wsFeed";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
} from "../constants";
import { TWsResponseBody } from "../../utils/api-shape";
import { WS_STATE_OPEN, WS_URL } from "../../constants";

export const feedSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TAppActions>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsFeedActions) => {
      const { type } = action;
      const { dispatch } = store;

      if (type === WS_FEED_CONNECTION_START) {
        socket = new WebSocket(`${WS_URL}/all`);
        wsFeedConnectionStartAction();
      }

      if (
        type === WS_FEED_CONNECTION_CLOSED &&
        socket?.readyState === WS_STATE_OPEN
      ) {
        socket?.close();
        wsFeedConnectionStartAction();
      }

      if (socket) {
        socket.onopen = (event) => {};

        socket.onerror = (event) => {};

        socket.onmessage = (event) => {
          const { data } = event;
          const message: TWsResponseBody = JSON.parse(data);
          dispatch(wsFeedGetMessageAction(message));
        };

        socket.onclose = (event) => {
          socket?.close();
        };
      }

      next(action);
    };
  }) as Middleware;
};
