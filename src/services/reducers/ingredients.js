const initialState = {
  ingredients: [],
  builderIngredients: [],
  selectedIngredient: null,
  createdOrder: {},
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { ingredientReducer };
