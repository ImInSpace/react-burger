import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { tabsReducer } from "./tabs";
import { forgotPasswordReducer } from "./forgot-password";
import { registerReducer } from "./register";
import { resetPasswordReducer } from "./reset-password";
import { authReducer } from "./auth";
import { headerMenuReducer } from "./header-menu";

const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  tabs: tabsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  register: registerReducer,
  auth: authReducer,
});

export { rootReducer };
