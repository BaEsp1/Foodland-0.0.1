import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryContainer from "../../Components/Cards/categoryContainer";
import "./Home.css";
import Carrousel from "../../Components/Carrousel/Carrousel";
import oferta1 from "../../Imgs/oferta1.jpeg";
import oferta2 from "../../Imgs/oferta2.png";
import StockViews from "../Stock/StockViews";
import CreateProduct from "../CreateProduct/CreateProduct";
import ListUsers from "../../Components/ListUser-Admin/Users";
import UserProfile from "../UserProfile/UserProfile";
import OrdersAdmin from "../../Components/OdersAdmin/OrdersAdmin";
import { signout } from "../../redux/actions/userActions";
import Chart from "../../Components/Charts/Charts";

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  /* =================== ESTADOS PARA COMPONENTES ===================*/
  const [selectedButton, setSelectedButton] = useState(""); // Estado para almacenar el botón seleccionado
  const [showStock, setShowStock] = useState(false); //Estado ver el Stock
  const [showCreateProduct, setShowCreateProduct] = useState(false); //Estado para crear producto
  const [showOverview, setShowOverview] = useState(true); // Estado estadisticas
  const [showUser, setShowUser] = useState(false); // Estado ver usuarios
  const [showProfile, setShowProfile] = useState(false); // Estado mi perfil
  const [showOrders, setShowOrders] = useState(false); // Estado mis ventas

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  /* =================== TOKEN USER ===================*/
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  /* =================== FUNCTION VER VENTANAS ===================*/
  /* =================== STOCK ===================*/
  const handleShowStock = () => {
    setSelectedButton("showStock");
    setShowStock(true);
    setShowCreateProduct(false);
    setShowUser(false);
    setShowOverview(false);
    setShowProfile(false);
    setShowOrders(false)
  };
  /* =================== CREATE PRODUCT ===================*/
  const handleShowCreateProduct = () => {
    setSelectedButton("showCreateProduct");
    setShowCreateProduct(true);
    setShowStock(false);
    setShowUser(false);
    setShowOverview(false);
    setShowProfile(false);
    setShowOrders(false)

  };
  /* =================== VER USUARIOS ===================*/
  const handleShowUser = () => {
    setSelectedButton("showUser"); 
    setShowCreateProduct(false);
    setShowStock(false);
    setShowUser(true);
    setShowOverview(false);
    setShowProfile(false);
    setShowOrders(false)

  };

  /* =================== VER ESTADISTICAS ===================*/
  const handleShowOverview = () => {
    setSelectedButton("ShowOverview");
    setShowCreateProduct(false);
    setShowStock(false);
    setShowUser(false);
    setShowOverview(true);
    setShowProfile(false);
    setShowOrders(false)

  };
  /* =================== VER MI PERFIL ===================*/
  const handleShowProfile = () => {
    setSelectedButton("showHomeClient");
    setShowCreateProduct(false);
    setShowStock(false);
    setShowUser(false);
    setShowOverview(false);
    setShowProfile(true);
    setShowOrders(false)
  };
  /* =================== VER MI PERFIL ===================*/
  const handleShowOrders = () => {
    setSelectedButton("showHomeClient");
    setShowCreateProduct(false);
    setShowStock(false);
    setShowUser(false);
    setShowOverview(false);
    setShowProfile(false);
    setShowOrders(true)
  };

  /* =================== LOG OUT ===================*/
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signout());
    navigate("/");
  };

  if (userInfo?.isAdmin) {
    return (
      /* =================== CONTENEDOR GENERAL ===================*/
      <div className="containerHome">
        <div className="containerHomeAdm">
          <div className="admBtnContainer">
            <div className="messageHome">
              <h1>Hi! {userInfo.name}</h1>
            </div>
            <div className="listAdmContainerGeneral" >
            <ul className="listAdmContainer">
            {/* =================== BTN OVERVIEW ===================*/}
              <li className={`listAdm ${
                selectedButton === "ShowOverview" ? "selected" : ""
              }`}
              onClick={handleShowOverview} >Overview</li>
            {/* =================== BTN STOCK ===================*/}
              <li 
               className={`listAdm ${
                selectedButton === "showStock" ? "selected" : ""
              }`}
              onClick={handleShowStock}> Stock </li>
            {/* =================== BTN CREATE PRODUCT ===================*/}
              <li className={`listAdm ${
                selectedButton === "showCreateProduct" ? "selected" : ""
              }`}
              onClick={handleShowCreateProduct}
            >  Create Product </li>
            {/* =================== BTN USERS ===================*/}
              <li className={`listAdm ${
                selectedButton === "showUser" ? "selected" : ""
              }`}
              onClick={handleShowUser}> Users </li>
            {/* =================== BTN MY ORDERS ===================*/}
            <li
              className={`listAdm ${
                selectedButton === "showProfile" ? "selected" : ""
              }`}
              onClick={handleShowOrders}> My orders</li>

            {/* =================== BTN MYPROFILE ===================*/}
            <li
              className={`listAdm ${
                selectedButton === "showProfile" ? "selected" : ""
              }`}
              onClick={handleShowProfile}>
              My profile
            </li>
            {/* =================== BTN LOGOUT ===================*/}
            <li onClick={signOutHandler} className="listAdm2">
              {" "}
              Log out
            </li>
            </ul>
            </div>
          </div>
          {showStock && <StockViews />} {/* VER STOCK */}
          {showCreateProduct && <CreateProduct />} {/* VER CREATE PRODUCT */}
          {showUser && <ListUsers/>} {/* VER USERS */}
          {showOverview &&  <Chart/> } {/* VER OVERVIEW */}
          {showProfile && <UserProfile />} {/* VER MYPROFILE */}
          {showOrders && <OrdersAdmin />} {/* VER MIS VENTAS */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ContainerHome">
        {!imagesLoaded && (
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Loading...</h2>
          </div>
        )}
        {imagesLoaded && (
          <>
            <Carrousel />
            <CategoryContainer />
          </>
        )}
        <img
          src={oferta1}
          alt=""
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />
        <img
          src={oferta2}
          alt=""
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />
      </div>
    );
  }
};

export default Home;
