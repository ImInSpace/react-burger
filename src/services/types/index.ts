import { Action, ActionCreator } from "redux";
import { TAppActions } from "../actions";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../reducers";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import type {} from "redux-thunk/extend-redux";

// Корневой стор.
export type TRootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов в приложении.
export type TRootActions = TAppActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TRootState, TRootActions>
>;

export type AppDispatch<TReturnType = void> = (
  action: TRootActions | AppThunk<TReturnType>
) => TReturnType;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;

export type TWsConnection = {
  url: string;
  token?: string;
};
