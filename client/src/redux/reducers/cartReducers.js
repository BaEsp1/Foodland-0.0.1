import { DELETE_CART, UPDATE_CART } from "../constants/cartConstants";

const initialState = {
  cart: localStorage.getItem("Carrito") ? JSON.parse(localStorage.getItem("Carrito")):[],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        cart: localStorage.getItem("Carrito") ? JSON.parse(localStorage.getItem("Carrito")):[],
      };

    default:
      return state;
  }
};
