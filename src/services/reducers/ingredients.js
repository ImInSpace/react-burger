const initialIngredientsState = {
  ingredients: [],
  builderIngredients: [],
  selectedIngredient: null,

  ingredientsRequest: false,
  ingredientsRequestError: false,
};

const ingredientReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { ingredientReducer };
