import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./placeOrderScreen.css";
import useLocalStore from "../../hooks/useLocalStore";
import { createOrder, sendEmail } from "../../redux/actions/orderActions";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import ButtonPayPal from "../../Components/PayPalButton/PaypalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
//import Loader from "../../Components/Loader/Loader";
//import MessageBox from "../../Views/Error/messageBox";

export default function PlaceOrderScreen() {
  const dispatch = useDispatch();
  const [cart] = useLocalStore("Carrito", []);
  const totalstate = useLocalStore("resumen",[])
  const { userInfo } = useSelector((state) => state.userSignin);

 // console.log({ userInfo });
  const {
    orders: { totalPrice: amount, active },
  } = useSelector((state) => state.order);

  const [value, setValue] = useState({
    name: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [shippingDiv, setshippingDiv] = useState(false);  //Esto es para que aparezca o no el div
  const [shippingInfo, setshippingInfo] = useState(false); // Este es como validador
  const [shippigUserLocalStore, setShippingUserLocalStore] = useLocalStore("Shipping", []);
  const [shippValue, setShippValue] = useState({   
    name:"",
    lastname:"",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  //   ================ creo shippingAddress ==========

  let shippingAddress = {
    fullName: value.lastname + "," + value.name,
    address: value.address,
    city: value.city,
    postalCode: value.postalCode,
    country: value.country,
  };

  // ============= Cargo los datos de la orden ============
  const paymentMethod = "Paypal";
  // let paymentResult = "Pending";
  let shippingPrice = 0;
  let itemsPrice = totalstate[0].subtotal;
  let taxPrice = totalstate[0].taxes;
  let totalPrice = parseFloat(totalstate[0].totalOrder.toFixed(2));

  // ========== ShippingAdress ========
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleShipping = (event) =>{
    if (event.target.value === "On") {
      setshippingDiv(true);

    } else {
      setshippingDiv(false);
      setshippingInfo(true);
    }
  }

  const handlesubmit = () =>{
    if(shippValue.name !== "" &&
        shippValue.lastname !== "" &&
        shippValue.address !== "" &&
        shippValue.postalCode !== ""&&
        shippValue.city !== "" &&
        shippValue.country !== "" 
        )
          {setshippingInfo(true);
          setShippingUserLocalStore({
            address: shippValue.address,
            postalCode:shippValue.postalCode,
            city: shippValue.city,
            country: shippValue.country,
          })
        }else{
            swal({
              title: "You need to complete all the information",
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

  }

  // ======== Despacho la orden =======
  const placeOrderHandler = (e) => {
    e.preventDefault();
    if(cart.length === 0){
      swal({
        title: "You need to add products first!",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    else if (!userInfo || !userInfo._id) {
      swal({
        title: "You need to be logged in to complete your purchase",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    } else if (
      !value.address ||
      !value.lastname ||
      !value.name ||
      !value.country ||
      !value.postalCode ||
      !value.city
    ) {
      swal({
        title: "You need to complete all the information",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    } 
    else if( shippingDiv && (
      !shippValue.name ||
      !shippValue.lastname ||
      !shippValue.address ||
      !shippValue.postalCode ||
      !shippValue.city ||
      !shippValue.country))
      {swal({
        title: "You need to complete your shipping information",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }else {
      dispatch(
        createOrder(
          {
            orderItems: cart.map((product) => ({ ...product, slug: "prueba" })),
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
            user: userInfo._id,
          },
          userInfo.token
        )
      );
      // este dispatch hay que ubicarlo en el boton de paypal
      dispatch(sendEmail({name:userInfo.name, email:userInfo.email, totalPrice:totalPrice, shippingAddress:shippingAddress.address,
      paymentMethod:paymentMethod, orderItems:cart.map((product) => ({ ...product, slug: "prueba" }))})) 
      
    }
  };



  return (
    <div name="ShippingOrder" className="ShippingOrder">
      {/* =========== Columna izquierda ========== */}
      <div className="columna">

			 {/* =============== SHIPPING ======================= */}
        <h2>Invoice Data</h2>
        <br />

        {/* console.log(userSignin.userInfo) >>>> activo */}
        <div name="Container Form Shipping" className="Form-Shipping">
          <form onClick={handleFormSubmit} className="formInput">
            {userInfo ? (
              <div>
                <label>
                  Email: <input value={userInfo.email} disabled></input>
                </label>
                <hr></hr>
                <h3>Billing Information</h3><br></br>
                <label>
                  Name:
                  <input
                    type="text"
                    value={value.name}
                    onChange={(event) =>
                      setValue({ ...value, name: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Lastname:
                  <input
                    type="text"
                    value={value.lastname}
                    onChange={(event) =>
                      setValue({ ...value, lastname: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Adress:
                  <input
                    type="text"
                    value={value.address}
                    onChange={(event) =>
                      setValue({ ...value, address: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  City:
                  <input
                  className="postal"
                    type="text"
                    value={value.city}
                    onChange={(event) =>
                      setValue({ ...value, city: event.target.value })
                    }
                  ></input>
                  PostalCode:
                  <input
                  className="postal"
                    type="text"
                    value={value.postalCode}
                    onChange={(event) =>
                      setValue({ ...value, postalCode: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Country:
                  <input
                    type="text"
                    value={value.country}
                    onChange={(event) =>
                      setValue({ ...value, country: event.target.value })
                    }
                  ></input>
                </label>
                  Shipping Address:
                <select onChange={handleShipping} value={shippingDiv ? "On" : "Off"}>
                  <option value="Off">Same</option>
                  <option value="On">Diferent</option>
                </select>
                {shippingDiv 
                ? 
                <div className="ShippingInfo">
                    <hr/>
                  <h3>Shipping Information</h3><br></br>
                  <label>Name:
                    <input type="text" value={shippValue.name}
                    onChange={(event) => setShippValue({ ...shippValue, name: event.target.value })} />
                  </label>
                  <label>Lastname:
                  <input type="text" value={shippValue.lastname}
                    onChange={(event) => setShippValue({ ...shippValue, lastname: event.target.value })} />
                  </label>

                  <label> Adress:
                  <input type="text" value={shippValue.address}

                    onChange={(event) => setShippValue({ ...shippValue, address: event.target.value })} />
                  </label>
                  <label>City:
                  <input type="text" value={shippValue.city} className="postal"
                    onChange={(event) => setShippValue({ ...shippValue, city: event.target.value })} />
                    PostalCode:
                    <input type="text" value={shippValue.postalCode} className="postal"
                    onChange={(event) => setShippValue({ ...shippValue, postalCode: event.target.value })} />
                  </label>
                  <label> Country:
                  <input type="text" value={shippValue.country}
                    onChange={(event) => setShippValue({ ...shippValue, country: event.target.value })} />
                  </label> 
                  <button onClick={handlesubmit}>Confirm</button>
                </div>
                : "" }
              
              </div>
            ) : (
              <div className="UsersInfo">
                <h2>User</h2>
                <div className="bottons">
                  <p>You need to be logged in to continue</p>
                  <Link to="/log-in">
                    <button>Login</button>
                  </Link>
                  {"or "}
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>


      <div className="columna">
        {/* ===========Summary ========== */}
        <h2>Order Summary</h2>

        <div className="summary">
          <label>
            <h4>
              Subtotal:<span>${itemsPrice.toFixed(2)}</span>
            </h4>
            <h4>
              Shipping:<span>{shippingPrice}</span>
            </h4>
            <h4>
              Taxes:<span>${taxPrice.toFixed(2)}</span>
            </h4>
          </label>
          <hr></hr>

          <h3>
            Total:<span>${totalPrice}</span>
          </h3>
          <label className="Shippingtitle">
            Shipping:<br></br>
            <span>To: {shippingInfo? shippValue.lastname + ","+ shippValue.name : value.lastname + "," + value.name}</span>
            <span>
            {shippingInfo ? shippValue.address + "," +shippValue.postalCode+ "," +shippValue.city : value.address+ "," +value.postalCode+ "," +value.city}
            </span>
          </label>
        </div>
        {/* ========= Boton para generar orden ====== */}
        {active ? (
          <PayPalScriptProvider
            options={{
              "client-id":
                "AXHIU4HHrVBO9gSmNtt7XuR1HxOokO55uDTnSTspREa2qThnJH2LnaDnG-djbF-6tcEPN37ug1bhnPbe",
              components: "buttons",
              currency: "USD",
            }}
          >
            <ButtonPayPal
              amount={amount}
              currency={"USD"}
              showSpinner={false}
              style={{ layout: "vertical" }}
            />
          </PayPalScriptProvider>
        ) : (
          <button
            type="button"
            onClick={placeOrderHandler}
            className="PlaceOrder"
            disabled={cart.length === 0 || userInfo === null}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}
