import { TOrder, TWsResponseBody } from "../../utils/api-shape";
import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SELECT,
} from "../constants";

export interface IWsFeedConnectionStartAction {
  readonly type: typeof WS_FEED_CONNECTION_START;
}

export interface IWsFeedConnectionSuccessAction {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IWsFeedConnectionErrorAction {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
  payload: Event;
}

export interface IWsFeedConnectionCloseAction {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export interface IWsFeedGetMessageAction {
  readonly type: typeof WS_FEED_GET_MESSAGE;
  message: TWsResponseBody;
}

export interface IWsFeedSelectAction {
  readonly type: typeof WS_FEED_SELECT;
  payload: TOrder;
}

export const wsFeedConnectionStartAction =
  (): IWsFeedConnectionStartAction => ({
    type: WS_FEED_CONNECTION_START,
  });

export const wsFeedConnectionClosedAction =
  (): IWsFeedConnectionCloseAction => ({
    type: WS_FEED_CONNECTION_CLOSED,
  });

export const wsFeedConnectionSuccessAction =
  (): IWsFeedConnectionSuccessAction => ({
    type: WS_FEED_CONNECTION_SUCCESS,
  });

export const wsFeedConnectionCloseAction =
  (): IWsFeedConnectionCloseAction => ({
    type: WS_FEED_CONNECTION_CLOSED,
  });

export const wsFeedGetMessageAction = (
  message: TWsResponseBody
): IWsFeedGetMessageAction => ({
  type: WS_FEED_GET_MESSAGE,
  message: message,
});

export const wsFeedSelectFeedAction = (
  selectedFeed: TOrder
): IWsFeedSelectAction => ({
  type: WS_FEED_SELECT,
  payload: selectedFeed,
});

export const wsFeedConnectionErrorAction = (
  eventData: Event
): IWsFeedConnectionErrorAction => ({
  type: WS_FEED_CONNECTION_ERROR,
  payload: eventData,
});

export type TWsFeedActions =
  | IWsFeedConnectionStartAction
  | IWsFeedConnectionSuccessAction
  | IWsFeedConnectionErrorAction
  | IWsFeedConnectionCloseAction
  | IWsFeedGetMessageAction
  | IWsFeedSelectAction;
