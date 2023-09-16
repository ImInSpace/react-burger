import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "../actions/order";

const initialOrderState = {
  number: 0,
  orderRequest: false,
  orderRequestError: false,
};
const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      console.log("Запрос на создание заказа.");
      return { ...state, orderRequest: true, orderRequestError: false };
    case CREATE_ORDER_SUCCESS:
      console.log("Заказ успешно создан.");
      return {
        number: action.number,
        orderRequest: false,
        orderRequestError: false,
      };
    case CREATE_ORDER_FAILED:
      console.log("Не удалось создать заказ.");
      return { ...state, orderRequest: false, orderRequestError: true };
    default:
      return state;
  }
};

export { orderReducer };
