import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersAdmin } from "../../redux/actions/orderActions";
import { Link } from "react-router-dom";

import "./OrdersAdmin.css";

const OrdersAdmin = () => {
  const orders = useSelector((state) => state.order?.myOrders);
  const dispatch = useDispatch();
  const itemsPerPage = 3; // Cantidad de compras por página
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 10; // Número máximo de páginas a mostrar en la paginación

  useEffect(() => {
    dispatch(getOrdersAdmin());
  }, [dispatch]);

  // Calcular el índice del último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calcular el índice del primer elemento de la página actual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Obtener las compras de la página actual
  const currentOrders = orders?.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el total de páginas
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para ir a la primera página
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  // Función para ir a la última página
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
  // console.log(currentOrders);

  return (
    <div className="TableAdminOrders">
      <div>
        <h1 className="svTitle2">My order history</h1>
      </div>
      <div className="orderTableAdmin">
        <table className="tablaAdmin">
          <thead>
            <tr>
              <th className="thStock1">Client</th>
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
          Todavía no tienes órdenes, continúa comprando{" "}
          <Link to="/">aquí</Link>.
        </p>
      </td>
    </tr>
  ) : (
    currentOrders.map((order, index) => (
      <React.Fragment key={order._id}>
        <tr>
          <td>
            <p className="A">{order.shippingAddress.fullName}</p>
          </td>
          <td className="restriccion">
            {order.orderItems.slice(0, 4).map((item) => (
              <div key={item._id}>
                <p className="productListOrder">{item.name}</p>
              </div>
            ))}
          </td>
          <td >
            {order.orderItems.slice(0, 4).map((item) => (
              <p className="productListOrder">usd$ {item.price}</p>
            ))}
          </td>
          <td>
            {order.orderItems.slice(0, 4).map((item) => (
              <p className="productListOrder">{item.quantity}</p>
            ))}
          </td>
          <td>usd$ {order.totalPrice}</td>
          <td>{order.isDelivered ? "Delivered" : "Not Delivered"}</td>
        </tr>
        {index < currentOrders.length - 1 && <tr><td colSpan="6"><hr /></td></tr>}
      </React.Fragment>
    ))
  )}
</tbody>

        </table>
      </div>
      {/* Paginado */}
      {orders.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={goToFirstPage}
            disabled={currentPage === 1}
          >
            First
          </button>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
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
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
};
export default OrdersAdmin;