import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  CLOSE_ORDER_MODAL,
} from "../actions/order";

const initialOrderState = {
  number: 0,

  orderRequest: false,
  orderRequestError: false,

  isModalShown: false,
};
const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      // Заказ уже создан. Нет смысла отправлять запрос повторно.
      if (state.number !== 0) {
        return { ...state, isModalShown: true };
      }

      return {
        ...state,
        orderRequest: true,
        orderRequestError: false,
        isModalShown: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        number: action.number,
        orderRequest: false,
        orderRequestError: false,
      };
    case CREATE_ORDER_FAILED:
      return {
        ...initialOrderState,
        orderRequest: false,
        orderRequestError: true,
      };
    case CLOSE_ORDER_MODAL: {
      return { ...state, isModalShown: false };
    }
    default:
      return state;
  }
};

export { orderReducer };
