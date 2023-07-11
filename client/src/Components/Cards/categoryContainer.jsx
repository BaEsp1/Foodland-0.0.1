import React, { useEffect } from "react";
// import {categorys} from "../categorys.js"
import CategoryCard from "./categoryCard";
import { NavLink } from "react-router-dom";
import "./cards.css";
import {
  getAllCategories,
  getAllProducts,
} from "../../redux/actions";
import { setFilterState } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
// import Carrousel from "../Carrousel/Carrousel";
import oferta1 from "../../Imgs/oferta1.jpeg";




const CategoryContainer = () => {
  /* IMPORT STATES */

  const { categories } = useSelector((state) => state.products);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const localCategories = categories.sort((a, b) => {
    if (a._id < b._id) return -1;
    if (a._id > b._id) return 1;
    return 0;
  });

  /* DISPATCH PARA TRAER LAS CATEGORIAS */

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
    dispatch(setFilterState(true));
  }, [dispatch]);

  return (
    <div className="categoryContainer">

      <h1>Find all our products right here</h1>

      <div className="breadcrumbContainer">
        <div className="breadcrumb">
          
          <NavLink active="true" to="/">
            Categories
          </NavLink>
        </div>
      </div>
      {userInfo?.isAdmin && ( // Verifica si el usuario es un administrador
          <NavLink to="/">
            <button className="btnAdminHome">Back</button>
          </NavLink>
        )}
      <div className="CardContainerCat">
        {/* <NavLink to={"/categories/allProducts"}>
          <div className="CategoryCard">
            <h3>All products</h3>
            <img src={oferta1} alt="imagen de categoria" />
          </div>
        </NavLink> */}
        {localCategories?.map((e) => (
          <NavLink key={e._id} to={`/categories/${e._id}`}>
            <CategoryCard key={e._id} name={e._id} image={e.imageCategory} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;