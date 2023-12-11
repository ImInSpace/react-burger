import { TIngredientsActions } from "../actions/ingredients";
import {
  ADD_INGREDIENT,
  CLOSE_INGREDIENTS_DETAILS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  OPEN_INGREDIENTS_DETAILS,
  REMOVE_INGREDIENT,
  REORDER_INGREDIENTS,
} from "../constants";
import { TConstructorIngredients, TIngredient } from "../types/data";

type TIngredientsState = {
  ingredients: ReadonlyArray<TIngredient>;
  constructorIngredients: TConstructorIngredients;
  selectedIngredient: TIngredient | null;

  getIngredientsRequest: boolean;
  getIngredientsError: boolean;
  error: string;
};

const initialIngredientsState: TIngredientsState = {
  ingredients: [],
  constructorIngredients: { bun: null, ingredients: [] },
  selectedIngredient: null,

  getIngredientsRequest: false,
  getIngredientsError: false,
  error: "",
};

const ingredientsReducer = (
  state = initialIngredientsState,
  action: TIngredientsActions
): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, getIngredientsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.items,
        getIngredientsRequest: false,
        getIngredientsError: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...initialIngredientsState,
        getIngredientsRequest: false,
        getIngredientsError: true,
      };
    }
    case ADD_INGREDIENT: {
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient._id === action.id
      );

      if (ingredient!.type === "bun") {
        return {
          ...state,
          constructorIngredients: {
            bun: ingredient!,
            ingredients: [...state.constructorIngredients.ingredients],
          },
        };
      } else {
        return {
          ...state,
          constructorIngredients: {
            bun: state.constructorIngredients.bun,
            ingredients: [
              ...state.constructorIngredients.ingredients,
              { ...ingredient!, key: action.key },
            ],
          },
        };
      }
    }
    case REMOVE_INGREDIENT: {
      const filtered = state.constructorIngredients.ingredients.filter(
        (ingredient, index) => index !== action.index
      );

      return {
        ...state,
        constructorIngredients: {
          bun: state.constructorIngredients.bun,
          ingredients: filtered,
        },
      };
    }
    case OPEN_INGREDIENTS_DETAILS: {
      return {
        ...state,
        selectedIngredient: state.ingredients.find(
          (ingredient) => ingredient._id === action.ingredientId
        )!,
      };
    }
    case CLOSE_INGREDIENTS_DETAILS: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    case REORDER_INGREDIENTS:
      var tmpArr = [...state.constructorIngredients.ingredients];
      tmpArr[action.hoverIndex] =
        state.constructorIngredients.ingredients[action.dragIndex];
      tmpArr[action.dragIndex] =
        state.constructorIngredients.ingredients[action.hoverIndex];

      return {
        ...state,
        constructorIngredients: {
          bun: state.constructorIngredients.bun,
          ingredients: tmpArr,
        },
      };

    default:
      return state;
  }
};

export { ingredientsReducer };
