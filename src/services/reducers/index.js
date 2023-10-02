import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { tabsReducer } from "./tabs";
import { forgotPasswordReducer } from "./forgot-password";
import { registerReducer } from "./register";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  tabs: tabsReducer,
  forgotPassword: forgotPasswordReducer,
  register: registerReducer,
});

export { rootReducer };
