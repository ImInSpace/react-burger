import { TOrderActions } from "../actions/order";
import {
  CLOSE_ORDER_MODAL,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants";

type TOrderState = {
  orderNumber: number;

  orderRequest: boolean;
  orderRequestError: boolean;

  isModalShown: boolean;
};

const initialOrderState: TOrderState = {
  orderNumber: 0,

  orderRequest: false,
  orderRequestError: false,

  isModalShown: false,
};
const orderReducer = (
  state = initialOrderState,
  action: TOrderActions
): TOrderState => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      // Заказ уже создан. Нет смысла отправлять запрос повторно.
      if (state.orderNumber !== 0) {
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
        orderNumber: action.orderNumber,
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
