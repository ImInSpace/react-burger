import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { tabsReducer } from "./tabs";
import { resetPasswordReducer } from "./forgot-password";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  tabs: tabsReducer,
  resetPassword: resetPasswordReducer,
});

export { rootReducer };
