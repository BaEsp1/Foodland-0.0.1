/* ========================* IMPORT GENERALES  *======================== */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/* ========================* IMPORT ACTIONS  *======================== */
import { getOrders } from "../../redux/actions/orderActions";

/* ========================* IMPORT STYLES  *======================== */
import "./UserOrders.css";

const UserOrders = () => {
  /* ========================* State Orders  *======================== */
  const orders = useSelector((state) => state.order?.myOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  /* ========================* Paginated *======================== */
  const itemsPerPage = 3; // Cantidad de compras por página
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 10; // Número máximo de páginas a mostrar en la paginación

  const indexOfLastItem = currentPage * itemsPerPage; // Calcular el índice del último elemento de la página actual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Calcular el índice del primer elemento de la página actual
  const currentOrders = orders?.slice(indexOfFirstItem, indexOfLastItem); // Obtener las compras de la página actual
  const totalPages = Math.ceil(orders.length / itemsPerPage); // Calcular el total de páginas

  /* ========================* Functions Paginated *======================== */
  /* ========================* Change page *======================== */
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* ========================* Next Page *======================== */
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  /* ========================* Back Page *======================== */
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /* ========================* First Page *======================== */
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  /* ========================* Last Page *======================== */
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  /* ==== * Calcular el número de páginas a mostrar en la paginación * ==== */
  const paginationPages = [];
  const paginationStart = Math.max(currentPage - Math.floor(maxPages / 2), 1);
  const paginationEnd = Math.min(paginationStart + maxPages - 1, totalPages);
  for (let i = paginationStart; i <= paginationEnd; i++) {
    paginationPages.push(i);
  }
  const aux2 = currentOrders?.map((e) => e);
  const idProducto = aux2;
  // console.log(orders)
  // console.log(idProducto);


  /* ========================* DATE *======================== */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="containerListOrdUser">
      <div>
        <h1>My order history</h1>
      </div>
      <div className="orderTableUser">
        {/* ========================* Tabla  *======================== */}
        <table>
          <thead>
            {/* ========================* Titulos  *======================== */}
            <tr>
              <th className="thStock1">D/ M / Y</th>
              <th className="thStock2">Name</th>
              <th className="thStock2">Price</th>
              <th className="thStock2">Amount</th>
              <th className="thStock2">Total Price</th>
              <th className="thStock3">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <p>
                    You haven't bought anything yet, continue buying{" "}
                    <Link to="/">Here</Link>.
                  </p>
                </td>
              </tr>
            ) : (
              /* ========================* Contenido  *======================== */
              currentOrders.map((order) => (
                <tr key={order._id}>
                  {/*  ========================* Fecha  *======================== */}
                  <td>
                    {formatDate(order.createdAt)}
                    <hr /> {/* Línea separadora entre compras */}
                  </td>
                  {/*  ========================* Productos  *======================== */}
                  <td>
                    
                      {order.orderItems.map((item) => (
                        <Link to={`/detail/${item.product}`}>
                          <div key={item._id}>
                          <p>{item.name}</p>
                        </div>        
                        </Link>
                      ))}
            
                    <hr /> {/* Línea separadora entre compras */}
                  </td>
                  {/*  ========================* Precio Unitario  *======================== */}
                  <td>
                    {order.orderItems.map((item) => (
                      <p>usd$ {item.price}</p>
                    ))}
                    <hr /> {/* Línea separadora entre compras */}
                  </td>
                  {/*  ========================* Cantidad  *======================== */}
                  <td>
                    {order.orderItems.map((item) => (
                      <p>{item.quantity}</p>
                    ))}
                    <hr /> {/* Línea separadora entre compras */}
                  </td>
                  {/*  ========================* Precio Total *======================== */}
                  <td>
                    usd$ {order.totalPrice}
                    <hr /> {/* Línea separadora entre compras */}
                  </td>
                  {/*  ========================* Enviado *======================== */}
                  <td>
                    {order.isPaid ? "Paid" : "Not payed"}
                    <hr /> {/* Línea separadora entre compras */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/*  ========================* Paginated *======================== */}
      {orders.length > itemsPerPage && (
        <div className="pagination">
          <button onClick={goToFirstPage} disabled={currentPage === 1}>
            First
          </button>
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Prev
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
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
          <button onClick={goToLastPage} disabled={currentPage === totalPages}>
            Last
          </button>
        </div>
      )}
    </div>
  );
};
export default UserOrders;
