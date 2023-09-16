import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  OPEN_INGREDIENTS_DETAILS,
  CLOSE_INGREDIENTS_DETAILS,
} from "../actions/ingredients";

const initialIngredientsState = {
  ingredients: [],
  constructorIngredients: { bun: null, ingredients: [] },
  selectedIngredient: null,

  ingredientsRequest: false,
  ingredientsRequestError: false,
};

const ingredientsReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, ingredientsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.items,
        ingredientsRequest: false,
        ingredientsRequestError: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsRequestError: true,
      };
    }
    case ADD_INGREDIENT: {
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient._id === action.id
      );

      if (ingredient.type === "bun") {
        return {
          ...state,
          constructorIngredients: {
            bun: ingredient,
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
              ingredient,
            ],
          },
        };
      }
    }
    case REMOVE_INGREDIENT: {
      const filtered = state.constructorIngredients.ingredients.filter(
        (ingredient) => ingredient._id !== action.id
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
          (ingredient) => ingredient._id === action.id
        ),
      };
    }
    case CLOSE_INGREDIENTS_DETAILS: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    default:
      return state;
  }
};

export { ingredientsReducer };
