import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  OPEN_INGREDIENTS_DETAILS,
  CLOSE_INGREDIENTS_DETAILS,
  REORDER_INGREDIENTS,
} from "../actions/ingredients";

const initialIngredientsState = {
  ingredients: [],
  constructorIngredients: { bun: null, ingredients: [] },
  selectedIngredient: null,

  ingredientsRequest: false,
  ingredientsRequestError: false,
  ingredientsErrorMsg: "",
};

const ingredientsReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, ingredientsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload.items,
        ingredientsRequest: false,
        ingredientsRequestError: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...initialIngredientsState,
        ingredientsRequest: false,
        ingredientsRequestError: true,
        ingredientsErrorMsg: action.payload.ingredientsErrorMsg,
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
              { ...ingredient, key: action.key },
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
          (ingredient) => ingredient._id === action.id
        ),
      };
    }
    case CLOSE_INGREDIENTS_DETAILS: {
      action.payload.navigateHook(-1);

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
