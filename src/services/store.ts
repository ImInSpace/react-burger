import { createStore } from "redux";

import { rootReducer } from "./reducers";
import { ThunkDispatch } from "redux-thunk";
import { TAppActions } from "./actions";

export const store = createStore(rootReducer);

export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;
export type RootState = ReturnType<typeof store.getState>;
