
import swal from "sweetalert";
import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";
import Lupa from "../../Imgs/Icons/lupa2.png"

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const AllProducts = useSelector(state => state.products.AllProducts.products);
  const IconLupa = Lupa;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandlerOnChange = (e) =>{
    if(e.target.value === "") 
    {setSearchValue(e.target.value) 
      navigate("/")}
    else setSearchValue(e.target.value)
}

  const handleSearch = () => {
    
    const filteredProducts = AllProducts.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredProducts.length > 0){
        // dispatch(setFilterState(false))
        dispatch(setProduct(filteredProducts));
        navigate("/categories/allProducts");
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
  

  return (
    <div name="ContainerSearch" className="ContainerSearch">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => HandlerOnChange(e) }
        className="Search"
        placeholder="Search products ..."
      ></input>
      <button onClick={handleSearch} className="butonSearch">
        <img
          src={Lupa}
          alt="iconLupa"
          className="Lup"
        />
      </button>
    </div>
  );
};

export default SearchBar;


