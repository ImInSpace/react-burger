import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../constants";

export interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: Event;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  messages: Array<string>;
}

export const wsConnectionStartAction = (): IWsConnectionStartAction => ({
  type: WS_CONNECTION_START,
});

export const wsConnectionSuccessAction = (): IWsConnectionSuccessAction => ({
  type: WS_CONNECTION_SUCCESS,
});

// export const wsGetMessageAction = (message: string): IWsGetMessageAction => ({
//   type: WS_GET_MESSAGE,
//   messages: ],
// });

export type TWsActions =
  | IWsConnectionStartAction
  | IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetMessageAction;
