import { Action, ActionCreator } from "redux";
import { TAppActions } from "../actions";
import { store } from "../store";
import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов в приложении.
export type TApplicationActions = TAppActions;

// Типизация thunk'ов в нашем приложении.
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена.
export type AppDispatch = typeof store.dispatch;
