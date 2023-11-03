import { getIngredients as getIngredientsRequest } from "../../utils/api";
import { v4 as uuid } from "uuid";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  OPEN_INGREDIENTS_DETAILS,
  CLOSE_INGREDIENTS_DETAILS,
  REORDER_INGREDIENTS,
} from "../constants";
import { TIngredient } from "../types/data";
import { NavigateFunction } from "react-router-dom";
import { type } from "os";
import { AppDispatch } from "../types";

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

export interface IRemoveIngredientAction {
  readonly type: typeof REMOVE_INGREDIENT;
  index: number;
}

export interface IOpenIngredientsDetailsAction {
  readonly type: typeof OPEN_INGREDIENTS_DETAILS;
  ingredientId: string;
}

export interface ICloseIngredientDetailsAction {
  readonly type: typeof CLOSE_INGREDIENTS_DETAILS;
  navigateHook: NavigateFunction;
}

export interface IReorderIngredientsAction {
  readonly type: typeof REORDER_INGREDIENTS;
  hoverIndex: number;
  dragIndex: number;
}

export const reorderIngredientsAction = (
  hoverIndex: number,
  dragIndex: number
): IReorderIngredientsAction => ({
  type: REORDER_INGREDIENTS,
  hoverIndex,
  dragIndex,
});

export const closeIngredientDetailsAction = (
  hook: NavigateFunction
): ICloseIngredientDetailsAction => ({
  type: CLOSE_INGREDIENTS_DETAILS,
  navigateHook: hook,
});

export const openIngredientId = (
  ingredientId: string
): IOpenIngredientsDetailsAction => ({
  type: OPEN_INGREDIENTS_DETAILS,
  ingredientId: ingredientId,
});

export const removeIngredientAction = (
  index: number
): IRemoveIngredientAction => ({
  type: REMOVE_INGREDIENT,
  index: index,
});

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
  return function (dispatch: AppDispatch) {
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
  | IGetIngredientsSuccessAction
  | IRemoveIngredientAction
  | IOpenIngredientsDetailsAction
  | ICloseIngredientDetailsAction
  | IReorderIngredientsAction;
