import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { tabsReducer } from "./tabs";
import { forgotPasswordReducer } from "./forgot-password";
import { registerReducer } from "./register";
import { resetPasswordReducer } from "./reset-password";
import { loginReducer } from "./login";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  tabs: tabsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  register: registerReducer,
  auth: loginReducer,
});

export { rootReducer };
