import React from "react";
import { Link } from 'react-router-dom';
import img1 from "../../Imgs/LogIn-Registro/Img1.png"
import img2 from "../../Imgs/LogIn-Registro/Img2.png"

      
/* ----------------------- STYLES -----------------------*/
import "../Register/Register.css";
/* ----------------------- COMPONENTS -----------------------*/
import RegisterScreen from "../../Components/FormRegisterUser/registerScreen";

const UserRegister = () => {
  const imgA = img1
  const imgB = img2
  return (
    <div className="registerContainer">
      <div className="btnHomeRegisterContainer">
        <Link to="/login">
          <button className="btnHome">BACK</button>
        </Link>
      </div>
      <div>
      <RegisterScreen />
      </div>
      <div>
        <img className='imgARegister' src={imgA} alt="" />
        <img className='imgBRegister'  src={imgB} alt="" />
      </div>
    </div>
  );
};

export default UserRegister;
