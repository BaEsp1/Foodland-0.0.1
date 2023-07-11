import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/rating";


const ProductCard = ({
  id,
  name,
  price,
  image,
  rating,
  description,
  numReviews,
  slug,
  funtionOnchange,
  stock,
  active,
}) => {
// console.log("este es el stock",stock);

  return (
    <div className="productCard">
      <div className="product">
        <Link to={`/detail/${encodeURI(id)}`}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>${price}</p>
          <Rating rating={rating} numReviews={numReviews} />
        </Link>
        {/* <button className='addButton'>ADD TO CART</button> */}
        {stock > 0 && active ? <button className="addButton" onClick={(e) => funtionOnchange(e, id,{id,name,price,image,rating,description,numReviews,slug})}>
          ADD TO CART
        </button>:<button disabled={true} className="addButton2">No Stock</button>}
      </div>
    </div>
  );
};

export default ProductCard;
