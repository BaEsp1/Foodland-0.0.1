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
  ADD_CATEGORY_SUCCESS,
  GET_PRODUCTS,
  DETAIL_PRODUCT,
  GET_BY_CATEGORY,
  SET_PRODUCT,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  SORT_PRODUCTS_ADMIN,
} from "../constants/productConstants";

const initialState = {
  products: [],
  display: false,
  categories: [],
  AllProducts: [],
  product: {},
  filterState: true,
};

const productsReducer = (state = initialState, action) => {
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
    case GET_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case DETAIL_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case HANDLE_SORTS:
      const toOrder = state.products;

      // console.log(action.payload);

      // const toOrder = auxToOrder.map((product) => {
      //   const normalizedPrice = parseFloat(
      //     product.price.toString().replace(".", "")
      //   );
      //   const normalizedName = product.name.replace(/[0-9/]+/g, "");

      //   return {
      //     ...product,
      //     price: normalizedPrice,
      //     name: normalizedName.trim(),
      //   };
      // });

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
      const toOrder2 = state.AllProducts;

      // const toOrder2 = auxToOrder2.map((product) => {
      //   const normalizedPrice = parseFloat(
      //     product.price.toString().replace(".", "")
      //   ); // Le quito los puntos a los precios
      //   const normalizedName = product.name.replace(/[0-9/]+/g, ""); // Omitir dígitos y caracteres de fracción en el nombre del producto
      //   return {
      //     ...product,
      //     price: normalizedPrice,
      //     name: normalizedName.trim(), // Trimeo el nombre del producto para eliminar cualquier espacio en blanco extra
      //   };
      // });

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
    case ADD_CATEGORY_SUCCESS:
      return [...state, action.payload];
    case GET_PRODUCTS:
      return {
        ...state,
        AllProducts: action.payload,
      };
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        allProducts: [...state.AllProducts, action.payload],
      };
    case PRODUCT_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export const productReviewCreateReducer = (
  state = {
    loading: false,
    success: false,
    error: "",
    review: {},
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case PRODUCT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_CREATE_RESET:
      return { loading: false, success: false, error: "", review: [] };
      default:
      return state;
      case SORT_PRODUCTS_ADMIN:
      return{ loading:false, Allproducts:action.payload}
  }
};

export default productsReducer;
