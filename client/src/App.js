import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import DetailCard from "./Views/Detail/DetailCard";
import CreateProduct from "./Views/CreateProduct/CreateProduct";
import ProductsContainer from "./Components/Cards/productsContainer";
import About from "./Views/About/About";
import MyCart from "./Views/MyCart/MyCart";
import SigninScreen from "./Views/Login/signinScreen";
import UserRegister from "./Views/Register/Register";
import StockViews from "./Views/Stock/StockViews";
import UpdateProduct from "./Views/UpdateProduct/UpdateProduct";
import PlaceOrderScreen from "./Views/Order/placeOrderScreen";
import UserProfile from "./Views/UserProfile/UserProfile";
import UserOrders from "./Components/UserOrders/UserOrders";
import Error404 from "./Components/Error/error404";
import LogIn from "./Views/Login/login2";
import HomeAdmin from "./Components/HomeAdmin/HomeAdmin";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location?.pathname === "/login" ||
      location?.pathname === "/register" ? null : (
        <NavBar />
      )}

      <Routes>
        {/* -----------------Routes generals -----------------*/}
        <Route exact path="/" element={<Home />} name="Home" key="Home"></Route>
        <Route
          path="/login"
          element={<SigninScreen />}
          name="Login"
          key="Login"
        ></Route>
        <Route
          path="/log-in"
          element={<LogIn />}
          name="Login"
          key="Login"
        ></Route>
        <Route
          path="/register"
          element={<UserRegister />}
          name="Register"
          key="Register"
        ></Route>
        <Route
          path="/about"
          element={<About />}
          name="About"
          key="About"
        ></Route>
        <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
        {/* -----------------Routes Users -----------------*/}
        <Route
          path="/detail/:id"
          element={<DetailCard />}
          name="DetailProducts"
          key="DetailProducts"
        ></Route>
        <Route
          path="/categories/:categoriesId"
          element={<ProductsContainer />}
          name="Products"
          key="Products"
        ></Route>
        <Route
          path="/profile"
          element={<UserProfile />}
          name="ProfileUser"
          key="ProfileUser"
        ></Route>
        <Route
          path="/MyCart"
          element={<MyCart />}
          name="MyCart"
          key="MyCart"
        ></Route>
        <Route
          path="/MyOrders"
          element={<UserOrders />}
          name="MyOrders"
          key="MyOrders"
        ></Route>
        {/* -----------------Routes Admins -----------------*/}
        <Route
          path="/ordersUs"
          element={""}
          name="OrdersUser"
          key="OrdersUser"
        ></Route>
        <Route
          path="/products"
          element={<StockViews />}
          name="products"
          key="products"
        ></Route>
        <Route
          path="/editproduct/:id"
          element={<UpdateProduct />}
          name="products"
          key="products"
        ></Route>
        <Route
          path="/H0me"
          element={<HomeAdmin />}
          name="OrdersAdm"
          key="OrdersAdm"
        ></Route>
        <Route path="/Users" element={""} name="Users" key="Users"></Route>
        <Route
          path="/create"
          element={<CreateProduct />}
          name="create"
          key="create"
        ></Route>
        <Route path="/edit" element={""} name="edit" key="edit"></Route>
        <Route
          path="/detailOrder/:i"
          element={""}
          name="detailOrder"
          key="detailOrder"
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
