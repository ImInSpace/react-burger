import { Action, ActionCreator } from "redux";
import { TAppActions } from "../actions";
import { store } from "../store";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../reducers";
import { combineReducers } from "redux";
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

// Типизация thunk'ов в нашем приложении.
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType
//   TRootState,
//   unknown,
//   TRootActions
// >;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TRootState, TRootActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена.
// export type AppDispatch = typeof store.dispatch;

type AppDispatch<TReturnType = void> = (
  action: TRootActions | AppThunk<TReturnType>
) => TReturnType;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;
