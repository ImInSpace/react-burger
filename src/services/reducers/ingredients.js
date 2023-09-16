import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
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
      console.log("Выполняется запрос на получение ингредиентов...");
      return { ...state, ingredientsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      console.log("Запрос на получение инредиентов успешно выполнен.");
      return {
        ...state,
        ingredients: action.items,
        ingredientsRequest: false,
        ingredientsRequestError: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      console.log("Не удалось выполнить запрос на получение ингредиентов.");
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsRequestError: true,
      };
    }
    case ADD_INGREDIENT: {
      console.log("Добавление инредиента.");
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          state.ingredients.find((ingredient) => ingredient._id === action._id),
        ],
      };
    }
    case REMOVE_INGREDIENT: {
      console.log("Удаление ингредиента.");
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter(
          (ingredient) => ingredient._id !== action._id
        ),
      };
    }
    default:
      return state;
  }
};

export { ingredientsReducer };
