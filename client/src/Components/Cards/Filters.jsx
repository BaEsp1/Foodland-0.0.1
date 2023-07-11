import "./cards.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllProducts, setProduct } from "../../redux/actions";
import Swal from 'sweetalert2';

import Rating from "./RatingFilter"

const Filters = () => {
 

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  
  // filtrar por precio
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "min") {
      setMinPrice(value);
    } else if (name === "max") {
      setMaxPrice(value);
    }
    // console.log("minPrice:", minPrice);
    // console.log("maxPrice:", maxPrice);
  };


  // filtrar por rating
  const [rating, setRating] = useState(null); 

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    // console.log("example", selectedRating)
  };
  
  const handlerReset = () =>{
    window.location.reload()
  }
  
  const handleSubmit = () => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= parseInt(minPrice) &&
        product.price <= parseInt(maxPrice) &&
        (rating === null || product.rating === rating)
      );
    });
  
    if (filteredProducts.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No products found',
        text: 'There are no products with the selected rating.',
        confirmButtonText: 'OK',
      })
      return
    }
  
    dispatch(setProduct(filteredProducts));
  };

  return (
    <div>
    <fieldset>
      <label>Filter by price:</label>
      <div className="MinMax">
        $
        <input
          type="number"
          placeholder="Min"
          onChange={inputHandler}
          name="min"
        />{" "}
        -
        <input
          type="number"
          placeholder="Max" 
          onChange={inputHandler}
          name="max"
        />
      </div>
      <label>Filter by rating:</label>
      <Rating onClick={handleRating} /> <br></br>
      <label>
      <button type="submit" className="butonFilter" onClick={handleSubmit}>
        Filter
      </button>

      {
         window.location.pathname !== '/categories/allProducts' &&
      <button type="submit" onClick={handlerReset} className="ResetFilter">Reset</button>     
      }

      </label>

    </fieldset>
  </div>
  );
};

export default Filters;
