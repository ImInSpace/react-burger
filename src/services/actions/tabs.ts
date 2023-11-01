import {
  SELECT_BUNS_TAB,
  SELECT_MAINS_TAB,
  SELECT_SAUCES_TAB,
} from "../constants";

export interface ISelectBunsTab {
  readonly type: typeof SELECT_BUNS_TAB;
}

export interface ISelectMainsTab {
  readonly type: typeof SELECT_MAINS_TAB;
}

export interface ISelectSaucesTab {
  readonly type: typeof SELECT_SAUCES_TAB;
}

export const selectBunsTabAction = (): ISelectBunsTab => ({
  type: SELECT_BUNS_TAB,
});

export const selectMainsAction = (): ISelectMainsTab => ({
  type: SELECT_MAINS_TAB,
});

export const selectSaucesTabAction = (): ISelectSaucesTab => ({
  type: SELECT_SAUCES_TAB,
});

export type TTabsActions = ISelectBunsTab | ISelectMainsTab | ISelectSaucesTab;
