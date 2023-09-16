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

      const ingredient = state.ingredients.find(
        (ingredient) => ingredient._id === action.id
      );

      console.log("Добавляемый ингредиент", ingredient);
      console.log("Тип добавляемого ингредиента: ", ingredient.type);

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
      console.log("Удаление ингредиента.");
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter(
          (ingredient) => ingredient._id !== action.id
        ),
      };
    }
    case OPEN_INGREDIENTS_DETAILS: {
      console.log("Открытие модального окна с информацией об ингредиенте.");
      return {
        ...state,
        selectedIngredient: state.ingredients.find(
          (ingredient) => ingredient._id === action.id
        ),
      };
    }
    case CLOSE_INGREDIENTS_DETAILS: {
      console.log("Закрытие модального окна с информацией об ингредиенте.");
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
