import {
  TOTAL_ORDER,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_COMPLETE_PAY,
  GET_ORDERS_FAIL,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_REQUEST,
  SEND_EMAIL
} from "../constants/orderConstants";

const initialState = {
  orders: {
    active: false,
  },
  loading: false,
  error: "",
  isError: false,
  totalOrder: {
    shippingPrice: 0,
    subtotal: 0,
    taxes: 0,
    totalOrder: 0,
  },
  myOrders: [],
  OrdersAdmin: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state
      }
    case TOTAL_ORDER:
      return {
        ...state,
        totalOrder: action.payload,
      };
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isError: true,
      };
    case ORDER_COMPLETE_PAY:
      return {
        ...state,
        orders: {
          active: false,
        },
        loading: false,
      };
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        myOrders: action.payload,
      };
    case GET_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default ordersReducer;
