import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, sort_products} from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Stock.css";

const Stock = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const productList = products?.AllProducts?.products;

  // Estado para almacenar los productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(productList);
  }, [productList]);

  /*====== SearchBar ===== */
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    const filtered = productList.filter((p) =>
      p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filtered.length > 0) {
      setFilteredProducts(filtered);
    } else {
      swal({
        title: "Product not found",

        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") setFilteredProducts(productList);
  };

  /* ===== Sorts y Filtros=====*/
  const handleSelectsearch = (event) => {
    if(event.target.value === "all") {dispatch(getAllProducts())
    } else{ 
      dispatch(sort_products({ value: event.target.value, productList }))}
     ;
    }

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 11;
  const maxPages = 10; // Número máximo de páginas a mostrar en la paginación

  // Calcular índices de productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

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

  return (
    <div className="ContainerStockList">

      <div name="search&Sort&Filters" className="searchFilters">

        <label>
          <input
            name="searchUser"
            type="text"
            onChange={(e) => handleOnChange(e)}
            placeholder="Search products"
            className="searchListUsers"
          />
          <button type="submit" onClick={handleSearch} className="searchUser">
            <img
              src="https://tinypic.host/images/2023/04/27/lupa2.png"
              alt="iconLupa"
              className="Lup"
            />
          </button>
        </label>
        <label>
          <select onChange={handleSelectsearch} className="sortList">
            <option>
              Sort by:
            </option>
            <option value="NameAsc">Name A-Z</option>
            <option value="NameDsc">Name Z-A</option>
            {/* <option value="StockAsc" >Stock ↑</option>
            <option value="StockDsc" >Stock ↓</option> */}
          </select>
        </label>
        <label>
          <select onChange={handleSelectsearch} className="sortList">
            <option>
              Filter by:
            </option>
            <option value="all"> All</option>
            <option value="Desactive">Desactive</option>
            <option value="Active">Active</option>
          </select>
        </label>
      </div>
      <div className="stockList">
        <table>
          <thead>
            <tr>
              <th className="thStock1">Name</th>
              <th className="thStock2">Category</th>
              <th className="thStock2">Stock</th>
              <th className="thStock2">Brand</th>
              <th className="thStock2">Price</th>
              <th className="thStock3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts?.map((p) => (
              <tr key={p._id}>
                <td className={p.active ? "" : "inactive"}>{p.name}</td>
                <td className={p.active ? "" : "inactive"}>{p.category}</td>
                <td className={p.active ? "" : "inactive"}>{p.stock}</td>
                <td className={p.active ? "" : "inactive"}>{p.brand}</td>
                <td className={p.active ? "" : "inactive"}>usd${p.price}</td>
                <td>
                  <Link to={`/editproduct/${p._id}`}>Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
  );
};

export default Stock;