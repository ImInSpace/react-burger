import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { tabsReducer } from "./tabs";
import { forgotPasswordReducer } from "./forgot-password";
import { registerReducer } from "./register";
import { resetPasswordReducer } from "./reset-password";
import { authReducer } from "./auth";
import { wsFeedReducer } from "./ws-feed";
import { wsOrdersReducer } from "./ws-orders";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  tabs: tabsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  register: registerReducer,
  auth: authReducer,
  wsFeedReducer: wsFeedReducer,
  wsOrders: wsOrdersReducer,
});

export { rootReducer };
