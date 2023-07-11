import * as action from "../constants/orderConstants";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_COMPLETE_PAY,
} from "../constants/orderConstants";
import axios from "axios";
import swal from "sweetalert";

const URL = "https://foodland-production.up.railway.app";

// //  ============ Actualizo el total de la orden ======================
export const total_order = (order) => {
  console.log(order);
  return (dispatch) => {
    dispatch({
      type: action.TOTAL_ORDER,
      payload: order,
    });
  };
};

//============ POST ORDER ============== //

export const post_order = (order, token) => async () => {
  try {
    const newOrder = await axios.post(`${URL}/order`, order);
    console.log(newOrder);
  } catch (error) {
    console.log(error);
  }
};

//============ POST EMAIL ============== //

export const sendEmail = (usuario) => {
  return async (dispatch) => {
    console.log(usuario)
    try {
      const response = await axios.post(`${URL}/api/orders/email`, usuario);
      console.log(response.data);

      dispatch({
        type: action.SEND_EMAIL,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//==================== CREATE ORDER ================//

export const createOrder = (order, token) => async (dispatch) => {
  dispatch({ type: ORDER_CREATE_REQUEST });
  try {
    const { data } = await axios.post(`${URL}/api/orders`, order, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.message === "New Order Created") {
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
      window.localStorage.removeItem("Carrito");
    }
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const orderPay = () => async (dispatch) => {
  dispatch({ type: ORDER_COMPLETE_PAY });
  swal({
    title: "Successful purchase!",
    text: `The proof of purchase has been sent to your email, with it you can check the delivery status.`,
    icon: "success",
    confirmButtonText: "OK",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const getOrders = (order) => async (dispatch, getState) => {
  dispatch({ type: action.GET_ORDERS_REQUEST, payload: order });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const response = await axios.get(`${URL}/api/orders/mine`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: action.GET_ORDERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: action.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrdersAdmin = (order) => async (dispatch, getState) => {
  dispatch({ type: action.GET_ORDERS_REQUEST, payload: order });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const response = await axios.get(`${URL}/api/orders`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: action.GET_ORDERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: action.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
