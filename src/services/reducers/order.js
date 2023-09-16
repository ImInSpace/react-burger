const initialOrderState = {
  number: 0,
  orderRequest: false,
  orderRequestError: false,
};
const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { orderReducer };
