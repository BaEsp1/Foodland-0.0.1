import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// IMPORT STYLES
import "./CreateProduct.css";
// IMPORT COMPONENTS
import FormCreateProduct from "../../Components/FormCreateProduct/FormCreateProduct";

const CreateProduct = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo.isAdmin) {
    return (
      <div className="containerCreateProduct">
        <div className="message">
          <h1>This route is not available for buyers.</h1>
          <p>Please return to the home page.</p>
        </div>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="containerCreateProduct">
      <div className="svTitle">
        <h1>Create your product</h1>
      </div>
      <div className="formCreateProduct">
        <FormCreateProduct />
      </div>
    </div>
  );
};

export default CreateProduct;
