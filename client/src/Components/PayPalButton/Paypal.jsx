import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import {useDispatch} from 'react-redux'
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const URL = "https://foodland-production.up.railway.app";


function Paypal({order}) {
		const dispatch = useDispatch();
    //traer del estado los datos de la orden y usar el monto total para pasarlo al PayPalButton
	const { _id:orderId, } = order;
    const [sdkReady, setSdkReady] = useState(false);

	useEffect(() => {
		const addPayPalScript = async () => {
			//trae del back el usuario de prueba de paypal
            const { data } = await Axios.get(
				`${URL}/api/config/paypal`
			);
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
			script.async = true;
			script.onload = () => {
				setSdkReady(true);
			};
			document.body.appendChild(script);
		};

		if (!order) {
			//Si no tengo la orden la puedo buscar del back usando http://localhost:5000/api/orders/:id
		} else {
			//si la orden no está paga 
            if (!order.isPaid) {
				if (!window.paypal) {
					addPayPalScript();
				} else {
					setSdkReady(true);
				}
			}
		}
	}, [dispatch, order, orderId, sdkReady]);

	const successPaymentHnadler = () => {
		/* si el pago fue exitoso mandar al back para cambiar el campo "isPaid"
         en el modelo Order usando http://localhost:5000/api/orders/:id/pay  */
	};

	return (
		<div>
			{!order.isPaid && (
				<li>
					{!sdkReady ? (
						<Loader></Loader>
					) : (
						<PayPalButton
							amount={order.totalPrice}
							onSuccess={successPaymentHnadler}
						></PayPalButton>
					)}
				</li>
			)}
		</div>
	);
}

export default Paypal;
