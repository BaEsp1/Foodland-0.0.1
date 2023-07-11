/* ========================* IMPORT ACTIONS *======================== */
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  HANDLE_SORTS,
  HANDLE_SORTS2,
  LOADING,
  READY,
  RESULTSEARCH,
  RESULTSEARCH2,
  FILTERPRICE,
  ADD_CATEGORY_REQUEST, //no se usa
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE, //no se usa
  GET_PRODUCTS,
  DETAIL_PRODUCT,
  GET_BY_CATEGORY,
  SET_PRODUCT,
  CLEAR_PRODUCTS,
  SET_FILTER_STATE
} from "./action-types";

/* ========================* INITIAL STATE *======================== */
const initialState = {
  products: [],
  display: false,
  categories: [],
  AllProducts: [],
  product: {},
  filterState:true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        display: true,
      };
    case READY:
      return {
        ...state,
        display: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        AllProducts: action.payload,
      };
      case CLEAR_PRODUCTS:
        return { ...state, products: [] };
    case GET_BY_CATEGORY:
      return {
        ...state,
        products:action.payload
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        products:action.payload
      }
    ;  case SET_FILTER_STATE:
    return {
      ...state,
      products:action.payload
    }
    case DETAIL_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case HANDLE_SORTS:
      const auxToOrder = state.products;

      console.log(action.payload);

      const toOrder = auxToOrder.map((product) => {
        const normalizedPrice = parseFloat(
          product.price.toString().replace(".", "")
        ); // Le quito los puntos a los precios
        const normalizedName = product.name.replace(/[0-9/]+/g, ""); // Omitir dígitos y caracteres de fracción en el nombre del producto

        return {
          ...product,
          price: normalizedPrice,
          name: normalizedName.trim(), // Trimeo el nombre del producto para eliminar cualquier espacio en blanco extra
        };
      });

      if (action.payload === "desc") {
        const arrOrdenado = toOrder.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          products: arrOrdenado,
        };
      }

      if (action.payload === "asc") {
        const arrOrdenado = toOrder.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
        return {
          ...state,
          products: arrOrdenado,
        };
      }
      if (action.payload === "higher_price") {
        const arrOrdenado = toOrder.sort((a, b) => b.price - a.price);
        return {
          ...state,
          products: arrOrdenado,
        };
      } else {
        const arrOrdenado = toOrder.sort((a, b) => a.price - b.price);
        return {
          ...state,
          products: arrOrdenado,
        };
      }

    //========================== SORT HOME / PRODUCTS SEARCH =============
    case HANDLE_SORTS2:
      const auxToOrder2 = state.AllProducts;

      const toOrder2 = auxToOrder2.map((product) => {
        const normalizedPrice = parseFloat(
          product.price.toString().replace(".", "")
        ); // Le quito los puntos a los precios
        const normalizedName = product.name.replace(/[0-9/]+/g, ""); // Omitir dígitos y caracteres de fracción en el nombre del producto
        return {
          ...product,
          price: normalizedPrice,
          name: normalizedName.trim(), // Trimeo el nombre del producto para eliminar cualquier espacio en blanco extra
        };
      });

      if (action.payload === "desc") {
        const arrOrdenado2 = toOrder2.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          AllProducts: arrOrdenado2,
        };
      }

      if (action.payload === "asc") {
        const arrOrdenado2 = toOrder2.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
        return {
          ...state,
          AllProducts: arrOrdenado2,
        };
      }
      if (action.payload === "higher_price") {
        const arrOrdenado2 = toOrder2.sort((a, b) => b.price - a.price);
        return {
          ...state,
          AllProducts: arrOrdenado2,
        };
      } else {
        const arrOrdenado2 = toOrder2.sort((a, b) => a.price - b.price);
        return {
          ...state,
          AllProducts: arrOrdenado2,
        };
      }
    case RESULTSEARCH:
      return {
        ...state,
        products: state.AllProducts.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case RESULTSEARCH2: //>>>> EN HOME Y EN PRODUCTS
      return {
        ...state,
        Allproducts: action.payload,
      };
    case FILTERPRICE:
      return {
        ...state,
        products: action.payload,
      };
      //el caso esta duplicado
    case GET_ALL_CATEGORIES: 
      return action.payload;
    case ADD_CATEGORY_SUCCESS:
      return [...state, action.payload];
    case GET_PRODUCTS:
      return {
        ...state,
        AllProducts: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
