import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./signinScreen.css";
import img1 from "../../Imgs/LogIn-Registro/Img1.png";
import img2 from "../../Imgs/LogIn-Registro/Img2.png";
import { signin } from "../../redux/actions/userActions";
import Loader from "../../Components/Loader/Loader";
//import MessageBox from "../../Components/Error/messageBox";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export default function LogIn() {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/placeorder";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if(error){
      Swal.fire(error)
    }
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect, error]);

  const imgA = img1;
  const imgB = img2;

  return (
    <div className="loginContasiner">
      <div className="btnHomeRegisterContainer">
        <Link to="/">
          <button className="btnHome">HOME</button>
        </Link>
      </div>
      <form className="formLogin" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <Loader />}
        {/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
          <button className="login_google" onClick={() => loginWithRedirect()}>
            Sign in with Google
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer?{" "}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
      <div>
        <img className="imgALogin" src={imgA} alt="" />
        <img className="imgBLogin" src={imgB} alt="" />
      </div>
    </div>
  );
}
