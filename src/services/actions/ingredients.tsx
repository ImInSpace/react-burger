import { getIngredients as getIngredientsRequest } from "../../utils/api";
import { v4 as uuid } from "uuid";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_INGREDIENT,
} from "../constants";
import { TIngredient } from "../types/data";

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly items: ReadonlyArray<TIngredient>;
}

export const GetIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const GetIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
});

export const GetIngredientsSuccessAction = (
  ingredients: ReadonlyArray<TIngredient>
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  items: ingredients,
});

export function loadIngredientsThunk() {
  // @ts-ignore
  return function (dispatch) {
    dispatch(GetIngredientsAction());
    getIngredientsRequest()
      .then((res) => {
        dispatch(GetIngredientsSuccessAction(res.data));
      })
      .catch((err) => {
        // @ts-ignore
        dispatch(GetIngredientsFailedAction());
      });
  };
}

export const addIngredient = (ingredientId: string) => ({
  type: ADD_INGREDIENT,
  id: ingredientId,
  key: uuid(),
});
