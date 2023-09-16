import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredients";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
});

export { rootReducer };
