/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";
/* ========================* ACTIONS PRODUCTS *======================== */
const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
const PRODUCT_CREATE_FAIL = "PRODUCT_CREATE_FAIL";
const CREATE_PRODUCT = "CREATE_PRODUCT"; // Action para crear un producto
const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST"; // Action para crear un producto
const PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS"; // Action para crear un producto
const PRODUCT_UPDATE_FAIL = "PRODUCT_UPDATE_FAIL"; // Action para crear un producto
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"; // Action para traer todos los productos
const SET_PRODUCT = "SET_PRODUCT"; // actualiza el estado products con el array que le mandes
const HANDLE_SORTS = "HANDLE_SORTS"; // ordena los productos
const RESULTSEARCH = "RESULTSEARCH"; // Action que actualiza el estado global
const DETAIL_PRODUCT = "DETAIL_PRODUCT"; // Action para traer el detalle
const CLEAR_PRODUCTS = "CLEAR_PRODUCTS"; // Limpiar el estado de "products"

/* ======================= FILTER ==========================*/
const FILTERPRICE = "FILTERPRICE"; //Action que filtra por precio

/* ======================= CATEGORIES ==========================*/
const GET_BY_CATEGORY = "GET_BY_CATEGORY"; // trae una categoria especifica
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"; // trae todas las categorias
const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";

/*=============REVIEWS================================================*/
const PRODUCT_REVIEW_CREATE_REQUEST = "PRODUCT_REVIEW_CREATE_REQUEST"
const PRODUCT_REVIEW_CREATE_SUCCESS ="PRODUCT_REVIEW_CREATE_SUCCESS"
const PRODUCT_REVIEW_CREATE_FAIL="PRODUCT_REVIEW_CREATE_FAIL"
const PRODUCT_REVIEW_CREATE_RESET = 'PRODUCT_REVIEW_CREATE_RESET'

const SET_FILTER_STATE = "SET_FILTER_STATE";

/* ===================== LIST STOCK ===================== */
const SORT_PRODUCTS_ADMIN = "SORT_PRODUCTS_ADMIN" // Ordena los productos.


module.exports = {
  LOADING,
  READY,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  RESULTSEARCH,
  HANDLE_SORTS,
  FILTERPRICE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  DETAIL_PRODUCT,
  GET_BY_CATEGORY,
  SET_PRODUCT,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  SET_FILTER_STATE,
  CLEAR_PRODUCTS,
  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  SORT_PRODUCTS_ADMIN,
};
