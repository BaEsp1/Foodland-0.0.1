/*TODAS ESTAS CONSTANTES AHORA ESTAN EN productConstants.js*/

/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";

/* ========================* ACTIONS PRODUCTS *======================== */

const CREATE_PRODUCT = "CREATE_PRODUCT"; // Action para crear un producto
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"; // Action para traer todos los productos
const SET_PRODUCT ="SET_PRODUCT" // actualiza el estado products con el array que le mandes
const HANDLE_SORTS = "HANDLE_SORTS"; // ordena los productos
const RESULTSEARCH = "RESULTSEARCH"; // Action que actualiza el estado global
const DETAIL_PRODUCT = "DETAIL_PRODUCT"; // Action para traer el detalle

/* ======================= FILTER ==========================*/
const FILTERPRICE = "FILTERPRICE"; //Action que filtra por precio

/* ======================= CATEGORIES ==========================*/
const GET_BY_CATEGORY = "GET_BY_CATEGORY" // trae una categoria especifica
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"; // trae todas las categorias
const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";


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
  
};
