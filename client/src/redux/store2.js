import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
 
import { userRegisterReducer, userSigninReducer, users } from "./reducers/userReducers";
import productsReducer, { productReviewCreateReducer } from "./reducers/productReducers"; 
import ordersReducer from "./reducers/orderReducers";
import { cartReducer } from "./reducers/cartReducers";

//import { ..., ... } from "./reducers/cartReducers";
//import { ..., ... } from "./reducers/userReducers";
//import { ..., ... } from "./reducers/orderReducers";


//Esto es para que si el usuario estuvo loguado tenga guardados los datos en local storage (usuario, carrito, dirección) y sino arranca sin nada
const initialState = {
	 userSignin: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},
  };
	/*cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		shippingAddress: localStorage.getItem("shippingAddress")
			? JSON.parse(localStorage.getItem("shippingAddress"))
			: {},
		paymentMethod: "Paypal",
	}, */


//Aca van todos los reducers
const reducer = combineReducers({
	products: productsReducer,
	userSignin: userSigninReducer,	
	order: ordersReducer, 
	users: users,
	userRegister: userRegisterReducer,
	productReviewCreate: productReviewCreateReducer,
	cart: cartReducer,
});

export const store2 = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);
