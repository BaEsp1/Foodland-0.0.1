import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Stock from "../../Components/Stock/Stock";

const StockViews = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
  
    if (!userInfo.isAdmin) {
      return (
        <div className="containerCreateProduct">
          <div className="message">
            <h1>This route is not available for buyers.</h1>
            <p>Please return to the home page.</p>
          </div>
          <Link to='/'>
          <button>Go to Home</button>
          </Link>
        </div>
      );
    }
return(
    <div className="svContainer">
        <div className="svTitle">
            <h1>Stock</h1>
        </div>
        <div>
            <Stock/>
        </div>
    </div>
)
}

export default StockViews