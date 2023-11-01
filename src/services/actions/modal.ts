import { HIDE_MODAL, SHOW_MODAL } from "../constants";

export interface IShowModalAction {
  readonly type: typeof SHOW_MODAL;
}

export interface IHideModalAction {
  readonly type: typeof HIDE_MODAL;
}

export const showModalAction = (): IShowModalAction => ({
  type: SHOW_MODAL,
});

export const hideModalAction = (): IHideModalAction => ({
  type: HIDE_MODAL,
});

export type TModalActions = IShowModalAction | IHideModalAction;
