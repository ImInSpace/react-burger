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
  url: string;
}

export interface IWsFeedConnectionSuccessAction {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IWsFeedConnectionErrorAction {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
  payload: Event;
}

export interface IWsFeedConnectionClosedAction {
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

export const wsFeedConnectionStartAction = (
  url: string
): IWsFeedConnectionStartAction => ({
  type: WS_FEED_CONNECTION_START,
  url: url,
});

export const wsFeedConnectionClosedAction =
  (): IWsFeedConnectionClosedAction => ({
    type: WS_FEED_CONNECTION_CLOSED,
  });

export const wsFeedConnectionSuccessAction =
  (): IWsFeedConnectionSuccessAction => ({
    type: WS_FEED_CONNECTION_SUCCESS,
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

export type TWsFeedActions =
  | IWsFeedConnectionStartAction
  | IWsFeedConnectionSuccessAction
  | IWsFeedConnectionErrorAction
  | IWsFeedConnectionClosedAction
  | IWsFeedGetMessageAction
  | IWsFeedSelectAction;
