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

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  id: string;
  key: string;
}

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
});

export const getIngredientsSuccessAction = (
  ingredients: ReadonlyArray<TIngredient>
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  items: ingredients,
});

export const addIngredient = (ingredientId: string): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  id: ingredientId,
  key: uuid(),
});

export function loadIngredientsThunk() {
  // @ts-ignore
  return function (dispatch) {
    dispatch(getIngredientsAction());
    getIngredientsRequest()
      .then((res) => {
        dispatch(getIngredientsSuccessAction(res.data));
      })
      .catch((err) => {
        // @ts-ignore
        dispatch(getIngredientsFailedAction());
      });
  };
}

export type TIngredientsActions =
  | IAddIngredientAction
  | IGetIngredientsAction
  | IGetIngredientsFailedAction
  | IGetIngredientsSuccessAction;
