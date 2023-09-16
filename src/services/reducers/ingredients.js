import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";

const initialIngredientsState = {
  ingredients: [],
  builderIngredients: [],
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
    default:
      return state;
  }
};

export { ingredientsReducer };
