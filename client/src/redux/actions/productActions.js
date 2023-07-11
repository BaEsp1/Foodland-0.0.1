import axios from "axios";

import * as action from "../constants/productConstants"; // Import para traer todas las actions-types

// const URL = process.env.REACT_APP_URL ?? "http://localhost:5000";
const URL = "https://foodland-production.up.railway.app";

/* ========================*  LOADER *======================== */
export function loading() {
  return {
    type: action.LOADING,
  };
}

export function ready() {
  return {
    type: action.READY,
  };
}

/* ========================*  PRODUCTS *======================== */

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);
      console.log(response);
      if (response.data)
        dispatch({
          type: action.GET_ALL_PRODUCTS,
          payload: response.data,
        });
      dispatch(ready());
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_ALL_PRODUCTS,
        payload: error,
      });
      dispatch(ready());
    }
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products/categories`);
      dispatch({
        type: action.GET_ALL_CATEGORIES,
        payload: response.data,
      });
      dispatch(ready());
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_ALL_CATEGORIES,
        payload: error,
      });
      dispatch(ready());
    }
  };
};

export function setProduct(payload) {
  return {
    type: "SET_PRODUCT",
    payload,
  };
}
export function setFilterState(payload) {
  return {
    type: "SET_FILTER_STATE",
    payload,
  };
}

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products/slug/${id}`);

      // console.log(response.data);
      dispatch({
        type: action.DETAIL_PRODUCT,
        payload: response.data,
      });
      dispatch(ready());
    } catch (error) {
      // console.log(error, "WWWW");
      dispatch({
        type: action.DETAIL_PRODUCT,
        payload: error,
      });
      dispatch(ready());
    }
  };
};

/* ========================* FILTROS *======================== */

export const getByCategory = (category) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);
      const arrayProducts = response.data.products;

      if (category === "allProducts") {
        dispatch({
          type: action.GET_BY_CATEGORY,
          payload: arrayProducts,
        });
        dispatch(ready());
      } else {
        const productosFiltrados = arrayProducts.filter((producto) => {
          return producto.category === category;
        });
        dispatch({
          type: action.GET_BY_CATEGORY,
          payload: productosFiltrados,
        });
        dispatch(ready());
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_BY_CATEGORY,
        payload: error,
      });
      dispatch(ready());
    }
  };
};

export function handle_sorts(payload) {
  return {
    type: "HANDLE_SORTS",
    payload,
  };
}
export function handle_sorts2(payload) {
  return {
    type: "HANDLE_SORTS",
    payload,
  };
}

/* ========================*  SEARCH*======================== */
export const resultSearch = (result) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: action.RESULTSEARCH,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//========================*Filtro de rango de precios*==============//

export const filterPrice = (products) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: action.FILTERPRICE,
        payload: products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//========================*Add Category*==============//
export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: action.ADD_CATEGORY_REQUEST });
    const { data } = await axios.post(`${URL}/api/categories`, category);
    dispatch({
      type: action.ADD_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: action.ADD_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};
//========================* UPDATE PRODUCT *==============//

export const updateProduct = (product, _id) => async (dispatch, getState) => {
  dispatch({ type: action.PRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  const { data } = await axios.put(`${URL}/api/products/${_id}`, product, {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  });
  try {
    dispatch({ type: action.PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: action.PRODUCT_UPDATE_FAIL, error: message });
  }
};

//==============CREATE REVIEWS===================================//
export const createReview = (productId, review, token) => async (dispatch) => {
  // console.log("id", productId)
  // console.log("review", review)

  dispatch({ type: action.PRODUCT_REVIEW_CREATE_REQUEST });
  // const {
  // 	userSignin: { userInfo },
  // } = getState();
  // console.log("token",userInfo.token)
  try {
    const { data } = await axios.post(
      `${URL}/api/products/${productId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch({
      type: action.PRODUCT_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: action.PRODUCT_REVIEW_CREATE_FAIL, payload: message });
  }
};
//========================* CREATE PRODUCT *==============//

export const createProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: action.PRODUCT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post(`${URL}/api/products`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: action.PRODUCT_CREATE_SUCCESS, payload: data.product });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: action.PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};


/*============ Acciones para la barra de busqueda en la lista de stock(Admin)=================*/



// Ordenar los productos:
export const sort_products = ({value, productList}) =>{
  let productsort;
  

  if (value === "NameAsc") {
    productsort = productList.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  else if (value === "NameDsc") {

    productsort = productList.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  else if (value === 'StockAsc') {
    productsort = productList.products.sort((a, b) => a.stock - b.stock);
  } else if (value === 'StockDsc') {
    productsort = productList.products.sort((a, b) => b.stock - a.stock);
  }
  else if (value === "Active"){
  productsort = productList
    .sort(function (a,b){
      return a.active === b.active ? 0 : a.active ? -1 : 1;
    })
    .filter(function(p){
      return p.active === true;
    })
    .slice()
  }
  else if (value === "Desactive"){
    productsort = productList
    .sort(function (a,b){
      return a.active === b.active ? 0 : a.active ? 1 :-1;
    })
    .filter(function(p){
      return p.active === false;
    })
    .slice()
  }
  return{
    type: action.SORT_PRODUCTS_ADMIN,
    payload: productsort,
    }

};
