import { DELETE_CART, UPDATE_CART } from "../constants/cartConstants";

export const updateCart = (product) => ({
  type: UPDATE_CART,
  payload: product,
});
export const deleteCart = () => ({ type: DELETE_CART });
