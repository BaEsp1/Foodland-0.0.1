import React from "react";
import EditProductForm from "../../Components/Stock/FormUpdateProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UpdateProduct.css"

const UpdateProduct = () => {
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
        <div>
            <div>
                <h1>
                    Edit your product
                </h1>
            </div>
            <div>
                <EditProductForm/>
            </div>
        </div>
    )
}

export default UpdateProduct