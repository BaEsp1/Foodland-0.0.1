import React, { useState, useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Filters from "./Filters";
import Loader from "../Loader/Loader";
import ProductCard from "./productCard";
import swal from "sweetalert";

//IMPORT ACTIONS
import {
  handle_sorts,
  getByCategory,
  getAllProducts,
} from "../../redux/actions/productActions";
import { updateCart } from "../../redux/actions/cartActions";
//IMPORT LOCALSTORE
import useLocalStore from "../../hooks/useLocalStore";

const ProductsContainer = () => {
  /* =================== TOKEN USER ===================*/
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const { categoriesId } = useParams();

  /* IMPORT STATES */
  const { products, display, filterState } = useSelector(
    (state) => state.products
  );

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const maxPages = 10; // Número máximo de páginas a mostrar en la paginación

  // Calcular índices de productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(products?.length / productsPerPage);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Botones para ir a la página siguiente y anterior
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Botones para ir a la primera y última página
  const goToFirstPage = () => {
    setCurrentPage(1);
  };
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  // Calcular el número de páginas a mostrar en la paginación
  const paginationPages = [];
  const paginationStart = Math.max(currentPage - Math.floor(maxPages / 2), 1);
  const paginationEnd = Math.min(paginationStart + maxPages - 1, totalPages);
  for (let i = paginationStart; i <= paginationEnd; i++) {
    paginationPages.push(i);
  }

  /* FUNCION DE ORDENAMIENTO  */

  function handleSorts(e) {
    e.preventDefault();
    dispatch(handle_sorts(e.target.value));
  }

  /* DISPATCH PARA TRAER LOS PRODUCTOS */
  const dispatch = useDispatch();
  // ======== Traigo el LocalStore ====
  const [cart, setCart] = useLocalStore("Carrito", []);

  // ======= funcion add product =====
  const AddProductoToCart = (e, idProducto, data) => {
    e.preventDefault();
    const { id, name, price, image, description, slug } = data;
    const existingItem = cart.findIndex((item) => item.id === idProducto);
    // =============== Verifico si existe previamente ========
    if (existingItem !== -1) {
      // =========== Si existe sumo 1 a la cantidad pero no lo agrego al carrito =====
      cart[existingItem].quantity += 1;
      setCart(cart);
      dispatch(updateCart(cart));
      swal({
        text: "Product added to cart!",
        icon: "success",
      });
    } else {
      setCart([
        ...cart,
        { id, name, price, image, description, quantity: 1, slug },
      ]);
      dispatch(
        updateCart([
          ...cart,
          { id, name, price, image, description, quantity: 1, slug },
        ])
      );
      swal({
        text: "Product added to cart!",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    // si esta en true me despacha la accion que me trae los prod por
    if (filterState && window.location.pathname !== '/categories/allProducts') {
      dispatch(getAllProducts());
      dispatch(getByCategory(categoriesId));
    }
   },[dispatch, filterState, categoriesId]);

  if (userInfo?.isAdmin) {
    return (
      <div className="productsContainer">
        <div className="select_and_breadcrumb">
        <div className="breadcrumb">
          <NavLink to="/">Categories</NavLink>
          <p>/</p>
          <NavLink
            active="true"
            onClick={() => dispatch(getByCategory(categoriesId))}
            to={`/categories/${categoriesId}`}
          >
            {categoriesId}
          </NavLink>
        </div>
        <select className="selectInput" onChange={handleSorts}>
          <option value="">Sort by</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="higher_price">Higher price</option>
          <option value="lower_price">Lower price </option>
          <option value="best_score">Top rated</option>
          <option value="worst_score">Less rated </option>
        </select>
      </div><div className="filter_and_products">
          <div className="sidebar">
            <Filters />
          </div>
          <div className="CardContainerProd">
            <div className="products">
              {display ? (
                <Loader />
              ) : Array.isArray(currentProducts) && currentProducts[0]?.stock ? (
                currentProducts.map((product) => {
                  const id = product["_id"];
                  return (
                    <ProductCard
                      key={id}
                      id={id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      description={product.description}
                      rating={product.rating}
                      numReviews={product.numReviews}
                      slug={product.slug}
                      stock={product.stock}
                      active={product.active}
                      funtionOnchange={AddProductoToCart} />
                  );
                })
              ) : (
                <p>There are no products</p>
              )}
            </div>
            {/* Paginado */}
            <div className="pagination">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Prev
              </button>
              <button onClick={goToFirstPage} disabled={currentPage === 1}>
                First
              </button>
              {paginationPages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="productsContainer">
        <div className="select_and_breadcrumb">
          <div className="breadcrumb">
            <NavLink to="/">Categories</NavLink>
            <p>/</p>
            <NavLink
              active="true"
              onClick={() => dispatch(getByCategory(categoriesId))}
              to={`/categories/${categoriesId}`}
            >
              {categoriesId}
            </NavLink>
          </div>
          <select className="selectInput" onChange={handleSorts}>
            <option value="">Sort by</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="higher_price">Higher price</option>
            <option value="lower_price">Lower price </option>
            <option value="best_score">Top rated</option>
            <option value="worst_score">Less rated </option>
          </select>
        </div>
        <div className="filter_and_products">
          <div className="sidebar">
            <Filters />
          </div>
          <div className="CardContainerProd">
            <div className="products">
              {display ? (
                <Loader />
              ) : Array.isArray(currentProducts) ? (
                currentProducts?.map((e) => {
                  const id = e["_id"];
                  return (
                    <ProductCard
                      key={id}
                      id={id}
                      name={e.name}
                      price={e.price}
                      image={e.image}
                      description={e.description}
                      rating={e.rating}
                      numReviews={e.numReviews}
                      slug={e.slug}
                      stock={e.stock}
                      active={e.active}
                      funtionOnchange={AddProductoToCart}
                    />
                  );
                })
              ) : (
                <p>Sin productos</p>
              )}
            </div>
            {/* Paginado */}
            <div className="pagination">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Prev
              </button>
              <button onClick={goToFirstPage} disabled={currentPage === 1}>
                First
              </button>
              {paginationPages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductsContainer;
