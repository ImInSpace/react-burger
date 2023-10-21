import { getIngredients } from "../../utils/api";
import { v4 as uuid } from "uuid";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT: "REMOVE_INGREDIENT" = "REMOVE_INGREDIENT";

export const OPEN_INGREDIENTS_DETAILS: "OPEN_INGREDIENTS_DETAILS" =
  "OPEN_INGREDIENTS_DETAILS";
export const CLOSE_INGREDIENTS_DETAILS: 'CLOSE_INGREDIENTS_DETAILS' = "CLOSE_INGREDIENTS_DETAILS"; // prettier-ignore

export const REORDER_INGREDIENTS: "REORDER_INGREDIENTS" = "REORDER_INGREDIENTS";

export function loadIngredients() {
  // @ts-ignore
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredients()
      .then((res) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          payload: {
            items: res.data,
          },
        });
      })
      .catch((err) => {
        // @ts-ignore
        dispatch({
          type: GET_INGREDIENTS_FAILED,
          payload: {
            ingredientsErrorMsg: err,
          },
        });
      });
  };
}

export const addIngredient = (ingredientId: string) => ({
  type: ADD_INGREDIENT,
  id: ingredientId,
  key: uuid(),
});
