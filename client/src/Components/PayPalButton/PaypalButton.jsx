import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { orderPay } from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./paypal.css";
import { deleteCart } from "../../redux/actions/cartActions";
const URL = "https://foodland-production.up.railway.app/api/orders/";
// This values are the props in the UI
// const amount = "2";
// const currency = "USD";
// const style = {"layout":"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, style }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();
  const dispatchRedux = useDispatch();
  const [{ _id: idOrder }, { email: emailUser, token }] = useSelector(
    (state) => [state.order.orders, state.userSignin.userInfo]
  );

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
      className="buttonPaypal"
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order
            .capture()
            .then(function () {
              // Your code here after capture the order
              axios
                .put(
                  `${URL}${idOrder}/pay`,
                  {
                    id: data.orderID,
                    status: "PAY",
                    update_time: Date.now(),
                    email_address: emailUser,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  }
                )
                .then((data) => {
                  console.log(data);
                  dispatchRedux(orderPay());
                  dispatchRedux(deleteCart());
                  navigate("/");
                });
            })
            .catch((error) => console.log(error));
        }}
      />
    </>
  );
};
export default ButtonWrapper;
